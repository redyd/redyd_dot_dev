"use client";
import { useEffect } from "react";
import { Project } from "@/types/projects.t";
import { Skill } from "@/types/skills.t";
import ImageCarrousel from "@/components/cards/ImageCarrousel";
import ExternalButton from "@/components/actionnables/ExternalButton";

type Props = {
    project: Project;
    onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {

    useEffect(() => {
        const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handler);
        return () => document.removeEventListener("keydown", handler);
    }, [onClose]);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={onClose}>
            <div
                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col"
                style={{ boxShadow: "var(--shadow-md)" }}
                onClick={(e) => e.stopPropagation()}>

                <button
                    onClick={onClose}
                    aria-label="Fermer"
                    className="cursor-pointer absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--color-bg-muted)] hover:bg-[var(--color-border)] transition-colors text-[var(--color-text-muted)]"
                >
                    ✕
                </button>

                {project.images.length > 0 && (
                    <div className="h-64 md:h-80 flex-shrink-0">
                        <ImageCarrousel name={project.name} images={project.images} className="h-64 md:h-80" />
                    </div>
                )}

                <div className="flex flex-col gap-5 p-6 md:p-8">
                    <div className="flex flex-col gap-1">
                        <h2 className="heading text-2xl font-bold text-[var(--color-text)]">
                            {project.name}
                        </h2>
                        <p className="text-xs text-[var(--color-text-subtle)]">
                            {new Date(project.date).toLocaleDateString("fr-BE", {
                                year: "numeric", month: "long"
                            })}
                        </p>
                    </div>

                    <p className="text-sm md:text-base text-[var(--color-text-muted)] leading-relaxed">
                        {project.description}
                    </p>

                    <div>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                            Stack
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.stacks.map((tech: Skill) => (
                                <span
                                    key={tech.label}
                                    className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]"
                                >
                                    {tech.label}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 pt-1">
                        <ExternalButton href={project.repository} label="GitHub" />
                        {project.demo && (
                            <ExternalButton href={project.demo} label="Démo" />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}