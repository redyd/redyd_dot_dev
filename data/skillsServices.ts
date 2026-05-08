import {Skill} from "@/types/skills.t";
import Pocketbase from "pocketbase";

export const SkillsServices = {

    async getAll(pb: Pocketbase): Promise<Skill[]> {
        const records = await pb.collection('skills').getFullList();

        const skills: Skill[] = records.map(record => ({
            id: record.id,
            label: record.label,
            class: record.class,
            mastery: record.mastery,
            highlight: record.highlight
        }));

        return skills;
    },

    getClass() {
        return ["language", "backend", "frontend", "mobile", "devops", "data"];
    },

}
