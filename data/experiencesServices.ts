import {Event} from "@/types/experiences.t";
import Pocketbase, {RecordModel} from "pocketbase";

export const ExperiencesServices = {

    async getAll(pb: Pocketbase): Promise<Event[]> {
        const resultList = await pb.collection('experiences').getFullList({
            sort: "begin"
        });
        return resultList.map(exp => this.mapExperience(exp));
    },

    mapExperience(exp: RecordModel): Event {
        return {
            id: exp.id,
            role: exp.role,
            company: exp.company,
            description: exp.description,
            begin: new Date(exp.begin),
            end: exp.end ? new Date(exp.end) : undefined,
            type: exp.type
        }
    }
}