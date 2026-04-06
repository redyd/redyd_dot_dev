import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
import {Poppins, Space_Grotesk} from 'next/font/google'

export const metadata: Metadata = {
    title: "Home",
    description: "Welcome to my personal website - Author: SOEUR Timëo",
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-poppins',
})

const space_Grotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['700'],
    variable: '--font-space',
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning className={`${poppins.variable} ${space_Grotesk.variable}`}>
        <body className="min-h-full flex flex-col">
        <Providers>
            <div className="min-h-screen bg-bg text-text font-sans">
                {children}
            </div>
        </Providers>
        </body>
        </html>
    );
}
