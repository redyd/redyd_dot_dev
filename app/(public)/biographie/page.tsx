import type {Metadata} from "next";
import BiographieClient from "./BiographieClient";
import {JsonLd} from "@/lib/json-ld";
import {absoluteUrl, siteConfig} from "@/lib/site";

export const metadata: Metadata = {
    title: "Biographie",
    description:
        "Parcours, formations et expériences de Timëo Soeur, développeur fullstack en formation à HELMo, engagé dans des projets réels au sein du parcours SALTO.",
    alternates: {
        canonical: "/biographie",
    },
    openGraph: {
        type: "profile",
        url: absoluteUrl("/biographie"),
        title: "Biographie | Timëo Soeur",
        description:
            "Parcours, formations et expériences de Timëo Soeur, développeur fullstack en formation à HELMo, engagé dans des projets réels au sein du parcours SALTO.",
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
        title: "Biographie | Timëo Soeur",
        description:
            "Parcours, formations et expériences de Timëo Soeur, développeur fullstack en formation à HELMo, engagé dans des projets réels au sein du parcours SALTO.",
        images: [siteConfig.profileImage],
    },
};

export default function BioPage() {
    return (
        <>
            <BiographieClient/>
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        name: "Biographie | Timëo Soeur",
                        url: absoluteUrl("/biographie"),
                        mainEntity: {
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
                        },
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        itemListElement: [
                            {
                                "@type": "ListItem",
                                position: 1,
                                name: "Accueil",
                                item: absoluteUrl("/"),
                            },
                            {
                                "@type": "ListItem",
                                position: 2,
                                name: "Biographie",
                                item: absoluteUrl("/biographie"),
                            },
                        ],
                    },
                ]}
            />
        </>
    );
}
