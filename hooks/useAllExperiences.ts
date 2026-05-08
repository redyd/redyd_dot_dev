import useSWR from "swr";
import {ExperiencesServices} from "@/data/experiencesServices";
import pb from "@/lib/pocketbase";

export function useAllExperiences() {
    const {data, isLoading, error} = useSWR(
        ["experiences-all"],
        () => ExperiencesServices.getAll(pb)
    );
    return {
        experiences: data ?? null,
        loading: isLoading,
        error: error ? "Erreur lors du chargement" : null,
    };
}