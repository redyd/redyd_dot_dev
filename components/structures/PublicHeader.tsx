'use client';

import {ThemeToggle} from "@/components/actionnables/ThemeToggle";
import {NavBarItem} from "@/types/navigation.t";
import {BookOpen, House, PanelsTopLeft} from "lucide-react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {motion} from "framer-motion";

const iconSize = 16;

const navbarItems: NavBarItem[] = [
    { name: "Home", href: "/", icon: <House size={iconSize}/> },
    { name: "Projets", href: "/projects", icon: <PanelsTopLeft size={iconSize}/> },
    { name: "Biographie", href: "/biographie", icon: <BookOpen size={iconSize}/> }
];

export default function PublicHeader() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">

                {/* Logo */}
                <span className="text-sm font-medium tracking-tight text-text">
                    redyd.dev
                </span>

                {/* Nav */}
                <div className="flex items-center gap-2 text-xs">
                    {navbarItems.map((item, key) => {
                        const isActive =
                            pathname === item.href ||
                            pathname.startsWith(item.href + "/");

                        return (
                            <Link
                                key={key}
                                href={item.href}
                                className="relative flex items-center gap-2 px-3 py-1.5 rounded-md text-text-muted hover:text-text"
                            >
                                {/* Sliding background */}
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-indicator"
                                        className="absolute inset-0 rounded-md bg-accent-subtle"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30
                                        }}
                                    />
                                )}

                                {/* Content */}
                                <span className="relative z-10 flex items-center gap-2">
                                    {item.icon}
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                <ThemeToggle/>
            </div>
        </nav>
    );
}
