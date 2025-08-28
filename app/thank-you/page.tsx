"use server";

import {cookies} from "next/headers";

export default async function ThankYouPage(){
    const cookieStore = await cookies();
    const username = cookieStore.get('username')?.value;
    const password = cookieStore.get('password')?.value;

    return (
        <div className={`text-center h-full flex flex-col justify-center`}>

            <div className={`relative flex flex-col justify-center gap-4`}>
                <div className="pointer-events-none absolute -inset-10 rounded-3xl -z-10 bg-gradient-to-l from-transparent via-[#6bf4c7] to-transparent blur-xl opacity-70"/>
                <h1 className={`text-5xl font-semibold animate-bounce`}>Thank you for signing up, {username}!</h1>
                <p className={`text-lg text-gray-600 font-medium`}>Your password is: {password}</p>
            </div>

        </div>
    );
}