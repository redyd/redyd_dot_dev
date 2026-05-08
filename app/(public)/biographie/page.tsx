"use client";

import {FaGithub, FaLinkedin} from "react-icons/fa";
import {File, Mail} from "lucide-react";
import {useAllExperiences} from "@/hooks/useAllExperiences";
import RoadMap from "@/components/cards/RoadMap";

const socials = [
    {label: "GitHub", href: "https://github.com/redyd", icon: <FaGithub size={16}/>},
    {label: "LinkedIn", href: "https://linkedin.com/in/timëo-soeur-067579360", icon: <FaLinkedin size={16}/>},
    {label: "Contact", href: "mailto:timeosoeur@gmail.com", icon: <Mail size={16}/>},
    {label: "Mon CV", href: "/CV.pdf", icon: <File size={16}/>},
];

export default function BioPage() {
    const {experiences, error, loading} = useAllExperiences();

    return (
        <div className="px-4 sm:px-8 md:px-16 py-12 space-y-16">

            <section className="flex flex-col items-center text-center max-w-2xl mx-auto gap-6">
                <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)]">
                        À propos
                    </p>
                    <h1 className="heading text-4xl md:text-5xl font-bold">
                        Salut, moi c'est Timëo
                    </h1>
                    <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
                        Je suis un développeur fullstack en formation à l'HELMo, spécialisé dans le backend et le
                        déploiement.
                        Engagé dans le parcours SALTO, j'ai aquiéri de l'expérience sur des projets réels pour des
                        clients.
                        J'apprends rapidement, m'adapte facilement et aime les projets aux solutions complexes et
                        originales.
                    </p>
                </div>

                <div className="flex gap-3 flex-wrap justify-center">
                    {socials.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200
                        border-[var(--color-border)] text-[var(--color-text-muted)] bg-[var(--color-bg-subtle)]
                        hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                        >
                            {s.icon}
                            {s.label}
                        </a>
                    ))}
                </div>
            </section>

            <div className="max-w-3xl mx-auto w-full h-px bg-[var(--color-border)]"/>

            <section className="max-w-3xl mx-auto w-full flex flex-col gap-6">
                <h2 className="sub-heading text-2xl font-semibold">Formations</h2>
                <RoadMap events={experiences} loading={loading} error={error} type="formation"/>
            </section>

            <section className="max-w-3xl mx-auto w-full flex flex-col gap-6">
                <h2 className="sub-heading text-2xl font-semibold">Expériences</h2>
                <RoadMap events={experiences} loading={loading} error={error} type="experience"/>
            </section>

        </div>
    );
}