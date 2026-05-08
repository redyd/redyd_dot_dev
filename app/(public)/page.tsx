"use client";

import {useEffect, useState} from "react";
import {skillsData} from "@/data/skills.data";
import Loader from "@/components/utils/Loader";
import SkillsSection from "@/components/structures/SkillsSection";
import {Skill} from "@/types/skills.t";

export default function LandingPage() {
    const [skills, setSkills] = useState<Skill[] | null>(null);
    const [skillLoading, setSkillLoading] = useState(false);
    const [skillError, setSkillError] = useState<string | null>(null);

    useEffect(() => {
        setSkillLoading(true);

        skillsData
            .then(setSkills)
            .then(() => setSkillLoading(false))
            .catch(() => setSkillError("Chargement impossible"));
    }, []);

    return (
        <div className="px-4 sm:px-8 md:px-16 py-12">
            {/* Hero */}
            <section className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                <h1 className="heading text-4xl md:text-5xl font-bold">
                    Développeur Backend & Fullstack
                </h1>
                <p className="text-base md:text-lg text-[var(--color-text-muted)]">
                    Développeur étudiant spécialisé en Java et C#, avec une approche orientée
                    architecture, CI/CD et déploiement Docker.
                </p>
            </section>

            {/* 3 columns layout */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left: Skills */}
                <div>
                    <h2 className="sub-heading text-2xl font-semibold mb-4">Compétences</h2>
                    <SkillsSection skills={skills} loading={skillLoading} error={skillError} />
                </div>

                {/* Middle: Mini Bio */}
                <div>
                    <h2 className="sub-heading text-2xl font-semibold mb-4 text-center">À propos</h2>
                    <p className="text-[var(--color-text)] text-sm md:text-base leading-relaxed text-center">
                        Étudiant en développement, je me passionne pour la conception de systèmes robustes et scalables.
                        J’aime particulièrement le backend avec Java et C#, l’architecture applicative, et l’intégration
                        CI/CD. Je travaille également sur des projets mobiles avec React Native et des applications web
                        modernes
                        avec React et Next.js.
                    </p>
                </div>

                {/* Right: Derniers projets */}
                <div>
                    <h2 className="sub-heading text-2xl font-semibold mb-4 text-end">Derniers projets</h2>
                    <ul className="space-y-3 text-sm md:text-base text-end">
                        <li>Projet 1 – Gestion de tâches (React + Node)</li>
                        <li>Projet 2 – App mobile (React Native)</li>
                        <li>Projet 3 – API backend (Spring Boot + Docker)</li>
                    </ul>
                </div>
            </section>
        </div>
    );
}
