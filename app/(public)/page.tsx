import type {Metadata} from "next";
import HomePageClient from "./HomePageClient";
import {JsonLd} from "@/lib/json-ld";
import {absoluteUrl, siteConfig} from "@/lib/site";

export const metadata: Metadata = {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.description,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        url: absoluteUrl("/"),
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
};

export default function LandingPage() {
    return (
        <>
            <HomePageClient/>
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        name: siteConfig.name,
                        url: absoluteUrl("/"),
                        description: siteConfig.description,
                        inLanguage: siteConfig.locale,
                        publisher: {
                            "@type": "Person",
                            name: siteConfig.author,
                        },
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "Person",
                        name: siteConfig.author,
                        jobTitle: siteConfig.role,
                        url: absoluteUrl("/"),
                        image: absoluteUrl(siteConfig.profileImage),
                        email: siteConfig.email,
                        sameAs: [siteConfig.github, siteConfig.linkedin],
                        alumniOf: {
                            "@type": "CollegeOrUniversity",
                            name: "HELMo",
                        },
                        knowsAbout: [
                            "Java",
                            "C#",
                            "Backend development",
                            "Fullstack development",
                            "Docker",
                            "CI/CD",
                            "Architecture logicielle",
                        ],
                    },
                ]}
            />
        </>
    );
}
