'use server';

import { cookies } from 'next/headers';
import { LoginResponse, userController } from '../../../server/controllers/userController';

export async function loginAction(formData: { email: string; password: string }): Promise<LoginResponse> {
    const response = await userController.login(
        { body: formData },
        {
            status: () => ({
                json: (data: LoginResponse) => data
            })
        }
    );
    console.log(response);
    if (response.success && response.token) {
        const cookieStore = await cookies();
        cookieStore.set('token', response.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 60 * 60 * 24 // 24 hours
        });
    }

    return response;
} 