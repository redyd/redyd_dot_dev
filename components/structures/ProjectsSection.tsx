"use client";
import {Project} from "@/types/projects.t";
import {CardVariant} from "@/types/variants.t";
import ProjectCard from "@/components/cards/ProjectCard";
import Loader from "@/components/utils/Loader";

type Props = {
    projects: Project[] | null;
    loading: boolean;
    error: string | null;
    variant?: CardVariant;
};

const GRID_CLASSES: Record<CardVariant, string> = {
    grid: "grid grid-cols-1 sm:grid-cols-2 gap-6",
    list: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",
};

export default function ProjectsSection({projects, loading, error, variant = "grid"}: Props) {
    if (error) return <p className="text-sm text-[var(--color-text-muted)] italic">{error}</p>;

    return (
        <div className="relative min-h-[200px]">
            {loading && <Loader/>}
            <div className={GRID_CLASSES[variant]}>
                {projects?.map((project) => (
                    <ProjectCard key={project.id} project={project} variant={variant}/>
                ))}
            </div>
        </div>
    );
}