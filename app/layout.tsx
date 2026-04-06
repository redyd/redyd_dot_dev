import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
import AdminNavBar from "@/components/structures/Header";
import {Poppins} from 'next/font/google'

export const metadata: Metadata = {
    title: "redyd.dev",
    description: "Welcome to my personal website - Author: SOEUR Timëo",
};

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600'],
    variable: '--font-poppins',
})

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en" suppressHydrationWarning className={poppins.variable}>
        <body className="min-h-full flex flex-col">
        <Providers>
            <div className="min-h-screen bg-bg text-text font-sans">
                <AdminNavBar/>
                {children}
            </div>
        </Providers>
        </body>
        </html>
    );
}
