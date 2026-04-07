import {Skill} from "@/types/skills.t";

const CLASS_LABELS: Record<string, string> = {
    backend: "Backend",
    frontend: "Frontend",
    mobile: "Mobile",
    devops: "DevOps",
    language: "Langages",
    data: "Data",
    other: "Autres",
};

function groupByClass(skills: Skill[]): Record<string, Skill[]> {
    return skills.reduce((acc, skill) => {
        (acc[skill.class] = acc[skill.class] ?? []).push(skill);
        return acc;
    }, {} as Record<string, Skill[]>);
}

function MasteryDots({ mastery }: { mastery: number }) {
    return (
        <span className="flex gap-[2px] items-center">
      {Array.from({ length: 5 }, (_, i) => (
          <span
              key={i}
              className={`w-[4px] h-[4px] rounded-full ${
                  i < mastery ? "opacity-75" : "opacity-20"
              } bg-current`}
          />
      ))}
    </span>
    );
}

function SkillPill({ skill }: { skill: Skill }) {
    const base =
        "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs border transition-colors";
    const variant = skill.highlight
        ? "border-[var(--color-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] font-medium"
        : "border-[var(--color-border)] bg-[var(--color-bg-subtle)] text-[var(--color-text)]";

    return (
        <span className={`${base} ${variant}`}>
      {skill.label}
            <MasteryDots mastery={skill.mastery} />
    </span>
    );
}

export default function SkillsSection({ skills }: { skills: Skill[] }) {
    const grouped = groupByClass(skills);

    return (
        <div className="flex flex-col gap-4">
            {Object.entries(grouped).map(([cls, items]) => (
                <div key={cls}>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
                        {CLASS_LABELS[cls] ?? cls}
                    </p>
                    <div className="flex flex-wrap gap-1">
                        {items.map((skill) => (
                            <SkillPill key={skill.label} skill={skill} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
