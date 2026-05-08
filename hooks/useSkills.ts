import {useEffect, useState} from "react";
import {Skill} from "@/types/skills.t";
import {SkillsServices} from "@/data/skillsServices";
import pb from "@/lib/pocketbase";

type UseSkillsResult = {
    skills: Skill[] | null;
    loading: boolean;
    error: string | null;
}

export function useSkills(): UseSkillsResult {
    const [skills, setSkills] = useState<Skill[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setLoading(true);
                const data = await SkillsServices.getAll(pb);
                setSkills(data);
            } catch (e: any) {
                if (e?.isAbort) return;
                setError("Erreur lors du chargement");
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
        return () => pb.cancelAllRequests();
    }, []);

    return {skills, loading, error};
}