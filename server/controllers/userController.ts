import { Request, Response } from 'express';
import { connectToDatabase } from '../db';
import bcrypt from 'bcrypt';

export const userController = {
    async getUser(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    success: false,
                    message: 'Email and password are required'
                });
            }

            const { db } = await connectToDatabase();
            const user = await db.collection('users').findOne({ email });

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User not found'
                });
            }

            const isValidPassword = await bcrypt.compare(password, user.password);
            if (!isValidPassword) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials'
                });
            }

            const userWithoutPassword = { ...user };
            delete userWithoutPassword.password;

            res.status(200).json({
                success: true,
                data: userWithoutPassword
            });

        } catch (error) {
            console.error('Error in getUser:', error);
            res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}; 