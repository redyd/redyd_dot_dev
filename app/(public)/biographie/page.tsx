"use client";

import {FaGithub, FaLinkedin} from "react-icons/fa";
import {Mail, File} from "lucide-react";

const experiences = [
    {
        role: "Développement d'application",
        company: "HELMo Liège",
        period: "Depuis sept. 2024",
        description: "Bachelier de 3 ans avec parcours SALTO - projets réels pour des clients. Sera suivi d'un master en architecture des systèmes.",
    },
    {
        role: "Educateur étudiant",
        company: "Saint Lambert Bonneville",
        period: "2024 - 2025",
        description: "Educateur étudiant en centre spécialisé.",
    },
    {
        role: "Coach de foot",
        company: "RES Wanze Bas Oha",
        period: "2021 - 2023",
        description: "Coach de football pour des enfants de 4-5 ans.",
    },
    {
        role: "Jardinier",
        company: "Privé",
        period: "Depuis 2018",
        description: "De nombreux jobs étudiants en parc et jardin.",
    },
];

const socials = [
    {label: "GitHub", href: "https://github.com/redyd", icon: <FaGithub size={16}/>},
    {label: "LinkedIn", href: "https://linkedin.com/in/timëo-soeur-067579360", icon: <FaLinkedin size={16}/>},
    {label: "Contact", href: "mailto:timeosoeur@gmail.com", icon: <Mail size={16}/>},
    {label: "Mon CV", href: "/CV.pdf", icon: <File size={16}/>},
];

export default function BioPage() {
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
                        Développeur fullstack en formation à l'HELMo, spécialisé backend et déploiement.
                        Engagé dans le programme SALTO, avec expérience sur des projets réels pour des clients.
                        Apprentissage rapide, forte adaptabilité et goût pour la résolution de problèmes complexes.
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
                <div
                    className="flex flex-col gap-px"
                    style={{borderLeft: "2px solid var(--color-border)", paddingLeft: "1.5rem"}}
                >
                    {[
                        {
                            role: "Développement d'application",
                            company: "HELMo Liège",
                            period: "Depuis sept. 2024",
                            description: "Bachelier de 3 ans avec parcours SALTO. Sera suivi d'un master en architecture des systèmes.",
                        },
                        {
                            role: "BEPS",
                            company: "Croix Rouge Liège",
                            period: "2021",
                            description: "Diplôme valable jusqu'en 2026.",
                        },
                        {
                            role: "Enseignement secondaire",
                            company: "Collège Saint Quirin Huy",
                            period: "2018 - 2024",
                            description: "Etudes générales math - sciences - langues.",
                        },
                    ].map((item, i) => (
                        <div key={i} className="relative flex flex-col gap-1 pb-8 last:pb-0">
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: 10, height: 10,
                                    left: "calc(-1.5rem - 6px)", top: 6,
                                    backgroundColor: "var(--color-accent)",
                                }}
                            />
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div>
                                    <span className="text-sm font-semibold text-[var(--color-text)]">{item.role}</span>
                                    <span
                                        className="text-sm text-[var(--color-text-muted)]">{" · "}{item.company}</span>
                                </div>
                                <span className="text-xs text-[var(--color-text-subtle)] font-mono">{item.period}</span>
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="max-w-3xl mx-auto w-full flex flex-col gap-6">
                <h2 className="sub-heading text-2xl font-semibold">Expériences</h2>
                <div
                    className="flex flex-col gap-px"
                    style={{borderLeft: "2px solid var(--color-border)", paddingLeft: "1.5rem"}}
                >
                    {experiences.map((xp, i) => (
                        <div key={i} className="relative flex flex-col gap-1 pb-8 last:pb-0">
                            <div
                                className="absolute rounded-full"
                                style={{
                                    width: 10, height: 10,
                                    left: "calc(-1.5rem - 6px)", top: 6,
                                    backgroundColor: "var(--color-accent)",
                                }}
                            />
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div>
                                    <span className="text-sm font-semibold text-[var(--color-text)]">{xp.role}</span>
                                    <span className="text-sm text-[var(--color-text-muted)]">{" · "}{xp.company}</span>
                                </div>
                                <span className="text-xs text-[var(--color-text-subtle)] font-mono">{xp.period}</span>
                            </div>
                            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{xp.description}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}