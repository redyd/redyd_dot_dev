'use client'

import {useTheme} from 'next-themes'
import {useMounted} from "@/hooks/useMounted";
import {Moon, Sun} from "lucide-react";
import IconButton from "@/components/actionnables/IconButton";

export function ThemeToggle() {
    const {resolvedTheme, setTheme} = useTheme()
    const mounted = useMounted();

    if (!mounted) return <div className="w-9 h-9"/>

    const isDark = resolvedTheme === 'dark';

    return (
        <IconButton
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria_label="Toggle theme"
            icon={isDark ? <Sun size={16} /> : <Moon size={16} />}
        />
    )
}