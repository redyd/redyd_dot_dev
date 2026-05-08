"use client";
import {useState} from "react";
import {Project} from "@/types/projects.t";
import {CardVariant} from "@/types/variants.t";
import {Skill} from "@/types/skills.t";
import ImageCarrousel from "@/components/cards/ImageCarrousel";
import ExternalButton from "@/components/actionnables/ExternalButton";
import ProjectModal from "@/components/modals/ProjectModal";

type Props = {
    project: Project;
    variant?: CardVariant;
};

const IMAGE_HEIGHT: Record<CardVariant, string> = {
    grid: "h-44",
    list: "h-32",
};

const MAX_DESC: Record<CardVariant, number> = {
    grid: 122,
    list: 60,
};

export default function ProjectCard({project, variant = "grid"}: Props) {
    const [open, setOpen] = useState(false);
    const hasImages = project.images.length > 0;

    const maxLen = MAX_DESC[variant];
    const description = project.description.length > maxLen
        ? project.description.slice(0, maxLen) + "..."
        : project.description;

    return (
        <>
            <div
                onClick={() => setOpen(true)}
                className="flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-subtle)] hover:border-[var(--color-accent)] transition-colors overflow-hidden cursor-pointer"
                style={{boxShadow: "var(--shadow-sm)"}}
            >
                {hasImages && (
                    <ImageCarrousel
                        name={project.name}
                        images={project.images}
                        className={IMAGE_HEIGHT[variant]}
                    />
                )}
                <div className="flex flex-col gap-3 p-4 flex-1">
                    <h3 className="font-semibold text-[var(--color-text)] text-sm md:text-base">
                        {project.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[var(--color-text-muted)] flex-1 leading-relaxed">
                        {description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {project.stacks.map((tech: Skill) => (
                            <span key={tech.label}
                                  className="text-xs px-2 py-0.5 rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)]">
                                {tech.label}
                            </span>
                        ))}
                    </div>
                    <div className="flex gap-3 text-sm pt-1" onClick={(e) => e.stopPropagation()}>
                        <ExternalButton href={project.repository} label="Git"/>
                        {project.demo && <ExternalButton href={project.demo} label="Demo"/>}
                    </div>
                </div>
            </div>

            {open && <ProjectModal project={project} onClose={() => setOpen(false)}/>}
        </>
    );
}