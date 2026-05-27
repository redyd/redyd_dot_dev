"use client";

export function TypingIndicator() {
    return (
        <div className="flex items-end gap-3 mb-3">
            <div
                className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent-subtle border border-border flex items-center justify-center">
                <span className="text-xs font-semibold text-accent">T</span>
            </div>
            <div className="bg-bg-subtle border border-border rounded-2xl rounded-bl-sm px-4 py-3">
                <div className="flex gap-1.5 items-center h-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-text-subtle animate-bounce [animation-delay:0ms]"/>
                    <span className="w-1.5 h-1.5 rounded-full bg-text-subtle animate-bounce [animation-delay:150ms]"/>
                    <span className="w-1.5 h-1.5 rounded-full bg-text-subtle animate-bounce [animation-delay:300ms]"/>
                </div>
            </div>
        </div>
    );
}