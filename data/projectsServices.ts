import {Skill} from "@/types/skills.t";
import {Project} from "@/types/projects.t";
import Pocketbase from "pocketbase";

export const ProjectsServices = {

    async getLast(pb: Pocketbase, count: number): Promise<Project[]> {
        const resultList = await pb.collection('projects').getList(1, count, {
            expand: "stacks",
            sort: "-date"
        });

        return resultList.items.map(project => this.mapProject(pb, project));
    },

    async getAll(pb: Pocketbase): Promise<Project[]> {
        const resultList = await pb.collection('projects').getFullList( {
            expand: "stacks",
            sort: "-date"
        });

        return resultList.map(project => this.mapProject(pb, project));
    },

    mapProject(pb: Pocketbase, project: RecordModel): Project {
        return {
            id: project.id,
            name: project.name,
            date: new Date(project.date),
            description: project.description,
            repository: project.repository,
            demo: project.demo,

            images: (project.images ?? []).map((img: string) =>
                pb.files.getURL(project, img)
            ),

            stacks: (project.expand?.stacks ?? []).map((stack: any) => ({
                id: stack.id,
                label: stack.label,
                class: stack.class,
                mastery: stack.mastery,
                highlight: stack.highlight
            }))
        }
    }
};
