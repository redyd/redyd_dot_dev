'use client';

import {useLayoutEffect, useRef, useState} from "react";
import {ThemeToggle} from "@/components/actionnables/ThemeToggle";
import {NavBarItem} from "@/types/navigation.t";
import {BookOpen, House, Menu, PanelsTopLeft, X} from "lucide-react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {AnimatePresence, motion} from "framer-motion";

const iconSize = 16;

const navbarItems: NavBarItem[] = [
    {name: "Home", href: "/", icon: <House size={iconSize}/>},
    {name: "Projets", href: "/projects", icon: <PanelsTopLeft size={iconSize}/>},
    {name: "Biographie", href: "/biographie", icon: <BookOpen size={iconSize}/>}
];

export default function PublicHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number } | null>(null);

    const activeIndex = navbarItems.findIndex((item) =>
        item.href === "/"
            ? pathname === "/"
            : pathname === item.href || pathname.startsWith(item.href + "/")
    );

    useLayoutEffect(() => {
        const activeEl = itemRefs.current[activeIndex];
        const navEl = navRef.current;
        if (!activeEl || !navEl) {
            setIndicatorStyle(null);
            return;
        }
        const navRect = navEl.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();
        setIndicatorStyle({
            left: itemRect.left - navRect.left,
            width: itemRect.width,
        });
    }, [activeIndex, pathname]);

    return (
        <nav className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">

                <span className="text-sm font-medium tracking-tight text-text">
                    redyd.dev
                </span>

                <div ref={navRef} className="hidden md:flex items-center gap-2 text-xs relative">

                    {indicatorStyle && (
                        <motion.div
                            className="absolute top-0 h-full rounded-md bg-accent-subtle"
                            animate={{left: indicatorStyle.left, width: indicatorStyle.width}}
                            transition={{type: "spring", stiffness: 400, damping: 30}}
                            style={{top: 0}}
                        />
                    )}

                    {navbarItems.map((item, key) => {
                        const isActive = activeIndex === key;
                        return (
                            <Link
                                key={key}
                                href={item.href}
                                ref={(el) => {
                                    itemRefs.current[key] = el;
                                }}
                                className={`relative flex items-center gap-2 px-3 py-1.5 rounded-md transition-colors z-10
                                    ${isActive ? "text-text" : "text-text-muted hover:text-text"}`}
                            >
                                {item.icon}
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle/>
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-md hover:bg-bg-muted"
                    >
                        {open ? <X size={18}/> : <Menu size={18}/>}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        transition={{duration: 0.2}}
                        className="md:hidden border-t border-border bg-bg"
                    >
                        <div className="flex flex-col px-4 py-3 gap-1">
                            {navbarItems.map((item, key) => {
                                const isActive = activeIndex === key;
                                return (
                                    <Link
                                        key={key}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition
                                            ${isActive
                                            ? "bg-accent-subtle text-text"
                                            : "text-text-muted hover:bg-bg-muted hover:text-text"}`}
                                    >
                                        {item.icon}
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}