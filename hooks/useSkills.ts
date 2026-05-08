import useSWR from "swr";
import {SkillsServices} from "@/data/skillsServices";
import pb from "@/lib/pocketbase";

export function useSkills() {
    const {data, isLoading, error} = useSWR(
        "skills",
        () => SkillsServices.getAll(pb)
    );
    return {
        skills: data ?? null,
        loading: isLoading,
        error: error ? "Erreur lors du chargement" : null,
    };
}