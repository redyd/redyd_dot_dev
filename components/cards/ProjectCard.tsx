"use client";

import {Project} from "@/types/projects.t";
import {Skill} from "@/types/skills.t";
import ImageCarrousel from "@/components/cards/ImageCarrousel";
import ExternalButton from "@/components/actionnables/ExternalButton";

type Props = {
    project: Project
};

export default function ProjectCard({project}: Props) {
    const hasImages = project.images.length > 0;
    const description = project.description.length > 122
        ? project.description.slice(0, 122) + "..."
        : project.description;

    return (
        <div
            className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] hover:border-[var(--color-accent)] transition-colors overflow-hidden"
            style={{boxShadow: "var(--shadow-sm)"}}>

            {hasImages && (
                <ImageCarrousel name={project.name} images={project.images}/>
            )}

            <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-semibold text-[var(--color-text)]">{project.name}</h3>
                <p className="text-sm text-[var(--color-text-muted)] flex-1 leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-wrap gap-1">
                    {project.stacks.map((tech: Skill) => (
                        <span
                            key={tech.label}
                            className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]">
                            {tech.label}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 text-sm pt-1">
                    <ExternalButton href={project.repository} label="Git" />

                    {project.demo && (
                        <ExternalButton href={project.demo} label="Demo" />
                    )}
                </div>
            </div>
        </div>
    );
}