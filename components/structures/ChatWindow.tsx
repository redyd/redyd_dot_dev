"use client";

import {useEffect, useRef} from "react";
import {ChatMessage} from "@/types/chat";
import {TypingIndicator} from "@/components/utils/TypingIndicator";

interface ChatWindowProps {
    messages: ChatMessage[];
    isLoading: boolean;
    error: string | null;
}

export function ChatWindow({messages, isLoading, error}: ChatWindowProps) {
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({behavior: "smooth"});
    }, [messages, isLoading]);

    if (messages.length === 0 && !isLoading) {
        return (
            <div className="flex-1 flex items-center justify-center overflow-hidden">
                <div className="text-center">
                    <p className="text-sm font-semibold text-text">Bonjour.</p>
                    <p className="text-xs text-text-subtle mt-1">Démarrons une conversation</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
            <div className="mx-auto max-w-3xl flex flex-col gap-3">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex items-end gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                    >
                        <div
                            className={`flex-shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center text-xs font-semibold ${
                                msg.role === "user"
                                    ? "bg-bg-muted border-border text-text-muted"
                                    : "bg-accent-subtle border-border text-accent"
                            }`}
                        >
                            {msg.role === "user" ? "U" : "T"}
                        </div>
                        <div
                            className={`max-w-[75%] px-4 py-2.5 text-sm leading-relaxed ${
                                msg.role === "user"
                                    ? "bg-accent text-white rounded-2xl rounded-br-sm"
                                    : "bg-bg-subtle border border-border text-text rounded-2xl rounded-bl-sm"
                            }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}

                {isLoading && <TypingIndicator/>}

                {error && (
                    <p className="text-xs text-danger text-center py-2">
                        {error}
                    </p>
                )}

                <div ref={bottomRef}/>
            </div>
        </div>
    );
}