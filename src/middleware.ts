import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-default-secret-key'
)

// Add paths that should be protected
const protectedPaths = ['/admin']

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const token = request.cookies.get('token')?.value

    console.log('Path:', path)
    console.log('Token from cookie:', token)

    if (protectedPaths.some(prefix => path.startsWith(prefix))) {
        if (!token) {
            console.log('No token found, redirecting to login')
            return NextResponse.redirect(new URL('/login', request.url))
        }

        try {
            const { payload } = await jwtVerify(token, JWT_SECRET)
            console.log('Decoded token:', payload)

            if (payload.role !== 'admin') {
                console.log('User is not admin, redirecting to home')
                return NextResponse.redirect(new URL('/', request.url))
            }
        } catch (error) {
            console.log('Token verification failed:', error)
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*'
} 