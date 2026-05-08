import {Skill} from "@/types/skills.t";
import {CLASS_LABELS} from "@/data/skills.data";
import SkillPill from "@/components/cards/SkillPill"
import Loader from "@/components/utils/Loader";

function groupByClass(skills: Skill[]): Record<string, Skill[]> {
    return skills.reduce((acc, skill) => {
        (acc[skill.class] = acc[skill.class] ?? []).push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);
}

export default function SkillsSection({skills, loading, error}: { skills: Skill[], loading: boolean, error: string | null }) {
    const grouped = (!loading && skills) ? groupByClass(skills) : {};

    if (error) {
        return <p>{error}</p>
    }

    return (
        <div className="relative min-h-[120px] flex flex-col gap-4">
            {loading && <Loader/>}
            {Object.entries(grouped).map(([cls, items]) => (
                <div key={cls}>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
                        {CLASS_LABELS[cls] ?? cls}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {items.map((skill) => (
                            <SkillPill key={skill.label} skill={skill}/>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}