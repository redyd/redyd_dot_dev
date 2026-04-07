import {Skill} from "@/types/skills.t";

export const skillsData: Promise<Skill[]> = new Promise<Skill[]>((resolve) => {
    resolve([
        {label: "Java", class: "backend", mastery: 5, highlight: true},
        {label: "C#", class: "backend", mastery: 4, highlight: true},
        {label: "Spring Boot", class: "backend", mastery: 3},
        {label: "NestJS", class: "backend", mastery: 3},

        {label: "React", class: "frontend", mastery: 4, highlight: true},
        {label: "Next.js", class: "frontend", mastery: 3},

        {label: "React Native (Expo)", class: "mobile", mastery: 3},

        {label: "Docker", class: "devops", mastery: 3, highlight: true},
        {label: "CI/CD", class: "devops", mastery: 3},
        {label: "Linux (Ubuntu - Fedora)", class: "devops", mastery: 3},

        {label: "TypeScript", class: "language", mastery: 4, highlight: true},
        {label: "Python", class: "language", mastery: 2},

        {label: "Elasticsearch", class: "data", mastery: 3},

        {label: "PHP", class: "other", mastery: 3}
    ])
});
