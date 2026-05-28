import type {Metadata} from "next";
import ProjectsClient from "./ProjectsClient";
import {JsonLd} from "@/lib/json-ld";
import {absoluteUrl, siteConfig} from "@/lib/site";

export const metadata: Metadata = {
    title: "Projets",
    description:
        "Sélection de projets personnels et scolaires de Timëo Soeur, avec recherche par titre, description et stack technique.",
    alternates: {
        canonical: "/projects",
    },
    openGraph: {
        type: "website",
        url: absoluteUrl("/projects"),
        title: "Projets | Timëo Soeur",
        description:
            "Sélection de projets personnels et scolaires de Timëo Soeur, avec recherche par titre, description et stack technique.",
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
        title: "Projets | Timëo Soeur",
        description:
            "Sélection de projets personnels et scolaires de Timëo Soeur, avec recherche par titre, description et stack technique.",
        images: [siteConfig.profileImage],
    },
};

export default function ProjectsPage() {
    return (
        <>
            <ProjectsClient/>
            <JsonLd
                data={[
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Projets | Timëo Soeur",
                        url: absoluteUrl("/projects"),
                        description:
                            "Sélection de projets personnels et scolaires de Timëo Soeur, avec recherche par titre, description et stack technique.",
                        about: {
                            "@type": "Person",
                            name: siteConfig.author,
                            jobTitle: siteConfig.role,
                            url: absoluteUrl("/"),
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
                                name: "Projets",
                                item: absoluteUrl("/projects"),
                            },
                        ],
                    },
                ]}
            />
        </>
    );
}
