import useSWR from "swr";
import {ProjectsServices} from "@/data/projectsServices";
import pb from "@/lib/pocketbase";

export function useAllProjects() {
    const {data, isLoading, error} = useSWR(
        ["projects-all"],
        () => ProjectsServices.getAll(pb)
    );
    return {
        projects: data ?? null,
        loading: isLoading,
        error: error ? "Erreur lors du chargement" : null,
    };
}