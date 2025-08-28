import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustoHeader from "@/components/CustoHeader";
import CustoFooter from "@/components/CustoFooter";
import Image from "next/image";
import custoBackground from '@/public/custo_background.webp';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Custo Login",
  description: "A mock login",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className={`grid min-h-dvh grid-rows-[auto_1fr_auto] p-1 relative overflow-hidden`}>
            <Image src={custoBackground.src} alt={`background`}
                   quality={100}
                   fill
                   className={`inset-0 -z-10 pointer-events-none`}
                   style={{
                       objectFit: "cover",
                   }}/>
            <CustoHeader/>
            <main >
                {children}
            </main>
            <CustoFooter/>
        </div>
      </body>
    </html>
  );
}
