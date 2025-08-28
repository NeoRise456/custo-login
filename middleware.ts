import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';


const publicRoutes = ["/signup"];

export default async function middleware(request: NextRequest) {

    const username = request.cookies.get('username')?.value;

    const { pathname } = request.nextUrl;

    if (publicRoutes.includes(pathname)) {
        return NextResponse.next();
    }

    if (!username) {
        const loginUrl = new URL('/signup', request.url);
        loginUrl.searchParams.set('from', pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}