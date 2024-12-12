import { connectToDatabase } from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret-key';

export type LoginRequest = {
    body: {
        email: string;
        password: string;
    };
};

export type LoginResponse = {
    success: boolean;
    message?: string;
    token?: string;
    data?: Record<string, unknown>;
};

type User = {
    _id: ObjectId;
    email: string;
    password: string;
    role: string;
};

export const userController = {
    async login(req: LoginRequest, res: {
        status: (code: number) => {
            json: (data: LoginResponse) => LoginResponse
        }
    }): Promise<LoginResponse> {
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

            const token = jwt.sign(
                {
                    userId: user._id,
                    email: user.email,
                    role: user.role
                },
                JWT_SECRET,
                { expiresIn: '24h' }
            );

            const userWithoutPassword = {
                ...user,
                _id: (user as User)._id.toString(),
            } as unknown as Omit<User, 'password'>;
            delete (userWithoutPassword as Record<string, unknown>).password;

            return res.status(200).json({
                success: true,
                data: userWithoutPassword,
                token
            });

        } catch (error) {
            console.error('Error in login:', error);
            return res.status(500).json({
                success: false,
                message: 'Internal server error'
            });
        }
    }
}; 