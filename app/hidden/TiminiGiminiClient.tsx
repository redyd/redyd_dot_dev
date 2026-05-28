"use client";

import {ChatWindow} from "@/components/structures/ChatWindow";
import {ChatInput} from "@/components/actionnables/ChatInput";
import {ClearButton} from "@/components/actionnables/ClearButton";
import {useChat} from "@/hooks/useChat";

export default function TiminiGiminiClient() {
    const {messages, isLoading, error, sendMessage, clearHistory} = useChat();

    return (
        <div className="h-[calc(100vh-3.5rem)] flex flex-col overflow-hidden bg-bg">
            <header className="flex-shrink-0 border-b border-border px-6 h-14 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className="w-7 h-7 rounded-lg bg-accent-subtle border border-border flex items-center justify-center">
                        <span className="text-xs font-semibold text-accent">T</span>
                    </div>
                    <div>
                        <span className="text-sm font-semibold text-text">TIMINI GEMINI</span>
                        <span className="ml-2 text-xs text-text-subtle">Intelligence Artificielle Supérieure™</span>
                    </div>
                </div>
                <ClearButton onClear={clearHistory}/>
            </header>

            <ChatWindow messages={messages} isLoading={isLoading} error={error}/>

            <ChatInput onSend={sendMessage} disabled={isLoading}/>
        </div>
    );
}
