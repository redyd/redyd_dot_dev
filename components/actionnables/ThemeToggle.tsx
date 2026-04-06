'use client'

import {useTheme} from 'next-themes'
import {useMounted} from "@/hooks/useMounted";
import {Moon, Sun} from "lucide-react";

export function ThemeToggle() {
    const {resolvedTheme, setTheme} = useTheme()
    const mounted = useMounted();

    if (!mounted) return <div className="w-9 h-9"/>

    const isDark = resolvedTheme === 'dark';

    return (
        <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="
    w-9 h-9 rounded-lg
    bg-bg-subtle hover:bg-bg-muted
    border border-border
    text-text-muted hover:text-text
    transition-colors hover:cursor-pointer
    flex items-center justify-center
  "
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
    )
}