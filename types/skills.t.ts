export type Skill = {
    label: string;
    class: SkillClass;
    mastery: Mastery;
    highlight?: boolean;
};

type SkillClass =
    | 'backend'
    | 'frontend'
    | 'mobile'
    | 'devops'
    | 'data'
    | 'language'
    | 'other';

type Mastery = 1 | 2 | 3 | 4 | 5;