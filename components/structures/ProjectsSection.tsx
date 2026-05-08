import {Projet} from "@/types/projects.t";
import ErrorText from "@/components/texts/ErrorText";
import Loader from "@/components/utils/Loader";
import ProjectCard from "@/components/cards/ProjectCard";

type Props = {
    projects: Project[] | null;
    loading: boolean;
    error: string | null;
}

export default function ProjectsSection({projects, loading, error}: Props) {
    if (error) return (
        <ErrorText content={error} />
    );

    return (
        <div className="relative min-h-[120px]">
            {loading && <Loader/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {projects && projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    )
}