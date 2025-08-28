import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    const response = NextResponse.json({ success: true });

    response.cookies.set({
        name: 'username',
        value: username,
        httpOnly: true,
        secure: true,
        path: '/',
    });

    response.cookies.set({
        name: 'password',
        value: password,
        httpOnly: true,
        secure: true,
        path: '/',
    });


    return response;
}