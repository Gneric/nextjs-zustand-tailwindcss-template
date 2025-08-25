import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request) {
    const reverseRoutePatternCheck = false

    const { pathname } = request.nextUrl
    
    const token = await getToken({ req: request })

    const pathCheck = ['/auth']

    if ( reverseRoutePatternCheck ) {
        if (!pathCheck.some(path => pathname.startsWith(path)) && !token) {
            return NextResponse.redirect(new URL('/Auth', request.url))
        }
    } else {
        if (pathCheck.some(path => pathname.startsWith(path)) && !token) {
            return NextResponse.redirect(new URL('/Auth', request.url))
        }
    }

    if (token && pathname === '/Auth') {
        return NextResponse.redirect(new URL('/Home', request.url))
    }

    return NextResponse.next()
}