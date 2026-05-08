"use client";

import {Search} from "lucide-react";
import {useState} from "react";

type SearchBarProps = {
    placeholder?: string;
    onSearch?: (value: string) => void;
    className?: string;
}

export default function SearchBar({placeholder = "Rechercher...", onSearch, className}: SearchBarProps) {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onSearch?.(e.target.value);
    };

    return (
        <div
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl w-full transition-all duration-200 ${className}`}
            style={{
                backgroundColor: "var(--color-bg-subtle)",
                border: `1.5px solid ${focused ? "var(--color-accent)" : "var(--color-border)"}`,
            }}
        >
            <Search
                size={16}
                style={{color: focused ? "var(--color-accent)" : "var(--color-text-subtle)"}}
                className="shrink-0 transition-colors duration-200"
            />
            <input
                type="text"
                value={value}
                onChange={handleChange}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none text-sm"
                style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-sans)",
                }}
            />
            <button
                onClick={() => { setValue(""); onSearch?.(""); }}
                className={`shrink-0 transition-all duration-200 cursor-pointer ${value ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                style={{ color: "var(--color-text-subtle)" }}
                aria-label="Effacer"
            >
                ✕
            </button>
        </div>
    );
}