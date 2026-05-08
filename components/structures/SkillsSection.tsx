import {Skill} from "@/types/skills.t";
import SkillPill from "@/components/cards/SkillPill";
import Loader from "@/components/utils/Loader";
import {SkillsServices} from "@/data/skillsServices";
import ErrorText from "@/components/texts/ErrorText";

type Props = {
    skills: Skill[] | null;
    loading: boolean;
    error: string | null;
}

function groupByClass(skills: Skill[]): Record<string, Skill[]> {
    return skills.reduce((acc, skill) => {
        (acc[skill.class] = acc[skill.class] ?? []).push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);
}

export default function SkillsSection({skills, loading, error}: Props) {
    if (error) return (
        <ErrorText content={error} />
    );

    const orderedClass = SkillsServices.getClass();

    const grouped = skills ? groupByClass(skills) : {};
    const orderedEntries = orderedClass
        .filter((cls) => grouped[cls]?.length)
        .map((cls) => [cls, grouped[cls]] as [string, Skill[]]);

    return (
        <div className="relative min-h-[120px]">
            {loading && <Loader/>}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {orderedEntries.map(([cls, items]) => (
                    <div key={cls}>
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
                            {orderedClass[cls] ?? cls}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {items.map((skill) => (
                                <SkillPill key={skill.label} skill={skill}/>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}