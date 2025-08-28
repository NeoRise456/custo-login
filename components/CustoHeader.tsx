"use client";

import Image from "next/image";
import custoLogo from '@/public/custo_logo.svg';
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function CustoHeader(){

    const homeLink = process.env.NEXT_PUBLIC_HOME_LINK || '/'

    return (
        <header className="w-full h-auto min-h-[5.5rem] px-16 flex items-center">
            <div className="w-full max-w-[67rem] h-full flex items-center justify-between gap-10 mx-auto">
                <Image src={custoLogo.src} alt={`a logo`} width={92} height={24}/>
            </div>
            <Button
                asChild
                className="px-6 py-3 rounded-full text-white  bg-gradient-to-b from-gray-950 from-[40%] to-[#6d7a97] hover:from-[#6d7a97] hover:from-[5%] hover:to-gray-950 text-md font-medium transition-all duration-150 ease-in-out hover:scale-105">
                <Link href={homeLink}>
                    Go to Home
                </Link>
            </Button>
        </header>
);
}