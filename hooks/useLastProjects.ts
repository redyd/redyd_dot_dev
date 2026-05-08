import {useEffect, useState} from "react";
import {Projects} from "@/types/projects.t";
import {ProjectsServices} from "@/data/projectsServices";
import pb from "@/lib/pocketbase";

type UseProjectsResult = {
    projects: Projects[] | null;
    loading: boolean;
    error: string | null;
}

export function useLastProjects({count}: { count: number }): UseProjectsResult {
    const [projects, setProjects] = useState<Projects[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLastProjects = async () => {
            try {
                setLoading(true);
                const data = await ProjectsServices.getLast(pb, count);
                setProjects(data);
            } catch (e: any) {
                if (e?.isAbort) return;
                setError("Erreur lors du chargement");
            } finally {
                setLoading(false);
            }
        };

        fetchLastProjects();
        return () => pb.cancelAllRequests();
    }, []);

    return {projects, loading, error};
}