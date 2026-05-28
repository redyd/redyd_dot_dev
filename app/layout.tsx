import type {Metadata} from "next";
import "./globals.css";
import {Providers} from "@/app/providers";
import {Poppins, Space_Grotesk} from 'next/font/google'
import {absoluteUrl, siteConfig} from "@/lib/site";

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.url),
    applicationName: siteConfig.name,
    title: {
        default: `${siteConfig.name} | ${siteConfig.role}`,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: [
        "Timëo Soeur",
        "portfolio",
        "développeur fullstack",
        "développeur backend",
        "HELMo",
        "Java",
        "C#",
        "Docker",
        "CI/CD",
    ],
    authors: [{name: siteConfig.author}],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    alternates: {
        canonical: "/",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-icon.png",
    },
    manifest: "/manifest.json",
    openGraph: {
        type: "website",
        locale: siteConfig.locale,
        url: absoluteUrl("/"),
        siteName: siteConfig.name,
        title: `${siteConfig.name} | ${siteConfig.role}`,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.profileImage,
                width: 1200,
                height: 630,
                alt: `Photo de ${siteConfig.name}`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | ${siteConfig.role}`,
        description: siteConfig.description,
        images: [siteConfig.profileImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
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
        <html lang="fr" suppressHydrationWarning className={`${poppins.variable} ${space_Grotesk.variable}`}>
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
