import { Router } from 'express';
import { LoginRequest, LoginResponse, userController } from '../controllers/userController';
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const router = Router();

type MockResponse = {
    status: (code: number) => {
        json: (data: LoginResponse) => LoginResponse
    }
};

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const mockRes = {
            status: () => ({
                json: (data: LoginResponse) => data
            })
        };

        return await userController.login(
            { body } as LoginRequest,
            mockRes as MockResponse
        );
    } catch {
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
export default router;