import {Skill} from "@/types/skills.t";

export type Project = {
    id: number;
    name: string;
    description: string;
    images: string[];
    stacks: Skill[];
    repository: string;
    demo?: string | null;
    date: Date;
}