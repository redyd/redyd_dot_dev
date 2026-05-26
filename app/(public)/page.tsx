"use client";

import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/navigation";
import SkillsSection from "@/components/structures/SkillsSection";
import ProjectsSection from "@/components/structures/ProjectsSection";
import Image from "next/image";
import Link from "next/link";
import {useSkills} from "@/hooks/useSkills";
import {useLastProjects} from "@/hooks/useLastProjects";

const MAX_CLICKS = 10;
const SCALE_START = 5;
const DECAY_INTERVAL_MS = 500;
const DECAY_DELAY_MS = 800;

export default function LandingPage() {
    const {skills, loading: skillLoading, error: skillError} = useSkills();
    const {projects, loading: projectsLoading, error: projectsError} = useLastProjects(2);
    const [clicks, setClicks] = useState(0);
    const lastClickRef = useRef<number>(Date.now());
    const router = useRouter();

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsed = Date.now() - lastClickRef.current;
            if (elapsed >= DECAY_DELAY_MS) {
                setClicks(c => Math.max(0, c - 1));
            }
        }, DECAY_INTERVAL_MS);
        return () => clearInterval(interval);
    }, []);

    const handleClick = async () => {
        lastClickRef.current = Date.now();
        const next = clicks + 1;
        setClicks(next);

        if (next >= MAX_CLICKS) {
            setClicks(0);
            const res = await fetch("/api/hidden/token", {method: "POST"});
            const {token} = await res.json();

            const verify = await fetch(`/api/hidden/token?token=${token}`);
            const {valid} = await verify.json();

            if (valid) router.push("/hidden");
            else router.replace("/");
        }
    };

    const scale = clicks >= SCALE_START
        ? 1 + (clicks - SCALE_START) * 0.06
        : 1;

    return (
        <div className="px-4 sm:px-8 md:px-16 py-12 space-y-16">

            <section className="flex flex-col items-center text-center max-w-2xl mx-auto gap-6">

                <div
                    onClick={handleClick}
                    style={{transform: `scale(${scale})`, transition: "transform 0.2s ease"}}
                    className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-[var(--color-accent)] ring-offset-2 ring-offset-[var(--color-bg)] cursor-pointer select-none"
                >
                    <Image
                        src="/profile.jpg"
                        alt="Photo de profil"
                        width={96}
                        height={96}
                        className="object-cover w-full h-full"
                        priority
                    />
                </div>

                <div className="space-y-2">
                    <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)]">
                        Recherche un stage
                    </p>
                    <h1 className="heading text-4xl md:text-5xl font-bold">
                        Développeur Backend & Fullstack
                    </h1>
                    <p className="text-base md:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto">
                        Étudiant en développement à HELMo, spécialisé en Java et C#,
                        avec une approche orientée architecture, CI/CD et déploiement Docker.
                    </p>
                </div>

                <div className="flex gap-3 flex-wrap justify-center">
                    <a
                        href="https://github.com/redyd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-lg bg-[var(--color-accent)] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                        GitHub
                    </a>
                    <Link
                        href="/biographie"
                        className="px-4 py-2 rounded-lg border border-[var(--color-border)] text-sm font-medium hover:bg-[var(--color-bg-subtle)] transition-colors">
                        Me contacter
                    </Link>
                </div>
            </section>

            <section className="max-w-3xl mx-auto w-full">
                <h2 className="sub-heading text-2xl font-semibold mb-6">Compétences</h2>
                <SkillsSection skills={skills} loading={skillLoading} error={skillError}/>
            </section>

            <section className="max-w-3xl mx-auto w-full">
                <h2 className="sub-heading text-2xl font-semibold mb-6">Derniers projets</h2>
                <ProjectsSection projects={projects} loading={projectsLoading} error={projectsError} variant={"grid"}/>
            </section>

        </div>
    );
}