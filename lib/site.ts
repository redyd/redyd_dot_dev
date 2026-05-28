export const siteConfig = {
    name: "Timëo Soeur",
    description:
        "Portfolio de Timëo Soeur, développeur backend et fullstack en formation à HELMo, orienté architecture, CI/CD et déploiement Docker.",
    author: "Timëo Soeur",
    role: "Développeur Backend & Fullstack",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    locale: "fr_BE",
    github: "https://github.com/redyd",
    linkedin: "https://linkedin.com/in/timëo-soeur-067579360",
    email: "mailto:timeosoeur@gmail.com",
    profileImage: "/profile.jpg",
    resume: "/CV.pdf",
} as const;

export function absoluteUrl(path = "/") {
    return new URL(path, siteConfig.url).toString();
}
