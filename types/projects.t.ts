import {Skill} from "@/types/skills.t";

export type Project = {
    id: string;
    name: string;
    description: string;
    images: string[];
    stacks: Skill[];
    repository?: string | null;
    demo?: string | null;
    date: Date;
}