"use client";

import {useCallback, useEffect, useState} from "react";
import {ChatMessage, GeminiMessage} from "@/types/chat";

const STORAGE_KEY = "redyd_chat_history";

function toGeminiHistory(messages: ChatMessage[]): GeminiMessage[] {
    return messages.map((m) => ({
        role: m.role,
        parts: [{text: m.text}],
    }));
}

export function useChat() {
    const [messages, setMessages] = useState<ChatMessage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const stored = sessionStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                setMessages(JSON.parse(stored));
            } catch {
                sessionStorage.removeItem(STORAGE_KEY);
            }
        }
    }, []);

    const persistMessages = useCallback((msgs: ChatMessage[]) => {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(msgs));
        setMessages(msgs);
    }, []);

    const sendMessage = useCallback(
        async (text: string) => {
            if (!text.trim() || isLoading) return;

            const userMessage: ChatMessage = {
                id: crypto.randomUUID(),
                role: "user",
                text: text.trim(),
            };

            const updated = [...messages, userMessage];
            persistMessages(updated);
            setIsLoading(true);
            setError(null);

            try {
                const res = await fetch("/api/hidden/chat", {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({history: toGeminiHistory(updated)}),
                });

                if (!res.ok) throw new Error("Erreur réseau");

                const data = await res.json();
                const modelMessage: ChatMessage = {
                    id: crypto.randomUUID(),
                    role: "model",
                    text: data.reply,
                };

                persistMessages([...updated, modelMessage]);
            } catch {
                setError("Timini Gemini est hors service. Nous sommes navré de ce drame.");
            } finally {
                setIsLoading(false);
            }
        },
        [messages, isLoading, persistMessages]
    );

    const clearHistory = useCallback(() => {
        sessionStorage.removeItem(STORAGE_KEY);
        setMessages([]);
        setError(null);
    }, []);

    return {messages, isLoading, error, sendMessage, clearHistory};
}