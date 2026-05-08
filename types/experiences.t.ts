export type Event = {
    id: string;
    role: string;
    description: string;
    company: string;
    begin: Date;
    end?: Date;
    type: EventType;
}

export type EventType = "experience" | "formation";