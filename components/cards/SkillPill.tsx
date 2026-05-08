import InlineDots from "@/components/utils/InlineDots";
import {Skill} from "@/types/skills.t";

export default function SkillPill({skill}: { skill: Skill }) {
    const base = "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border transition-colors group relative cursor-default";
    const variant = skill.highlight
        ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] font-medium"
        : "border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-[var(--color-text)]";

    return (
        <span className={`${base} ${variant}`}>
            {skill.label}

            <InlineDots mastery={skill.mastery} />

            <span className="pointer-events-none absolute -top-6 right-0 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-[10px] px-2 py-[2px] rounded whitespace-nowrap">
                Degré de maitrise {skill.mastery}/5
                <span className="absolute top-full right-1/2 translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-black" />
            </span>
        </span>
    );
}