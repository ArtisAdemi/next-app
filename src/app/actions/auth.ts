'use server';

import { cookies } from 'next/headers';
import { connectToDatabase } from '../../../server/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ResponseCookies } from 'next/dist/compiled/@edge-runtime/cookies';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret-key';

export async function loginAction(formData: { email: string; password: string }) {
    try {
        const { db } = await connectToDatabase();
        const user = await db.collection('users').findOne({ email: formData.email });

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const isValidPassword = await bcrypt.compare(formData.password, user.password);
        if (!isValidPassword) {
            return { success: false, message: 'Invalid credentials' };
        }

        const token = jwt.sign(
            {
                userId: user._id.toString(),
                email: user.email,
                role: user.role
            },
            JWT_SECRET,
            { expiresIn: '24h' }
        );

        const cookieStore = (cookies() as unknown) as ResponseCookies;
        cookieStore.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24
        });

        const userWithoutPassword = {
            ...user,
            _id: user._id.toString(),
            password: undefined
        };
        delete userWithoutPassword.password;

        return { success: true, data: userWithoutPassword };
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Internal server error' };
    }
} 