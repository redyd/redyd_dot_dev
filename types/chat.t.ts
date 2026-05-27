export type MessageRole = "user" | "model";

export interface GeminiMessage {
    role: MessageRole;
    parts: { text: string }[];
}

export interface ChatMessage {
    id: string;
    role: MessageRole;
    text: string;
}