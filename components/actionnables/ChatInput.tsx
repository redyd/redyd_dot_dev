"use client";

import {KeyboardEvent, useRef, useState} from "react";

interface ChatInputProps {
    onSend: (text: string) => void;
    disabled: boolean;
}

export function ChatInput({onSend, disabled}: ChatInputProps) {
    const [value, setValue] = useState("");
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSend = () => {
        if (!value.trim() || disabled) return;
        onSend(value);
        setValue("");
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.focus();
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <div className="flex-shrink-0 border-t border-border px-4 py-3 bg-bg">
            <div className="mx-auto max-w-2xl">
                <div
                    className="flex gap-2 items-end rounded-xl border border-border bg-bg-subtle px-3 py-2 focus-within:border-border-strong transition-colors duration-150">
          <textarea
              ref={textareaRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              placeholder="Écrivez votre message..."
              rows={1}
              className="flex-1 bg-transparent text-sm text-text placeholder:text-text-subtle resize-none outline-none py-1 leading-relaxed disabled:opacity-40"
              style={{maxHeight: "120px"}}
              onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${el.scrollHeight}px`;
              }}
          />
                    <button
                        onClick={handleSend}
                        disabled={disabled || !value.trim()}
                        className="flex-shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg bg-accent text-white hover:bg-accent-hover transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                        Envoyer
                    </button>
                </div>
                <p className="text-[10px] text-text-subtle mt-1.5 text-center">
                    Entrée pour envoyer · Maj+Entrée pour nouvelle ligne · Timini Gemini™ ne fait aucune erreur (ou presque)
                </p>
            </div>
        </div>
    );
}
