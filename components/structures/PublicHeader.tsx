'use client';

import {useState} from "react";
import {ThemeToggle} from "@/components/actionnables/ThemeToggle";
import {NavBarItem} from "@/types/navigation.t";
import {BookOpen, House, PanelsTopLeft, User, Menu, X} from "lucide-react";
import Link from "next/link";
import {usePathname} from 'next/navigation';
import {motion, AnimatePresence} from "framer-motion";
import IconButton from "@/components/actionnables/IconButton";

const iconSize = 16;

const navbarItems: NavBarItem[] = [
    { name: "Home", href: "/", icon: <House size={iconSize}/> },
    { name: "Projets", href: "/projects", icon: <PanelsTopLeft size={iconSize}/> },
    { name: "Biographie", href: "/biographie", icon: <BookOpen size={iconSize}/> }
];

export default function PublicHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">

                {/* Logo */}
                <span className="text-sm font-medium tracking-tight text-text">
                    redyd.dev
                </span>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-2 text-xs">
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

                                <span className="relative z-10 flex items-center gap-2">
                                    {item.icon}
                                    {item.name}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Right actions */}
                <div className="flex items-center gap-2">
                    <ThemeToggle/>

                    <IconButton
                        aria_label="Se connecter"
                        icon={<User size={iconSize}/>}
                    />

                    {/* Burger button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden p-2 rounded-md hover:bg-bg-muted"
                    >
                        {open ? <X size={18}/> : <Menu size={18}/>}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
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
                                const isActive =
                                    pathname === item.href ||
                                    pathname.startsWith(item.href + "/");

                                return (
                                    <Link
                                        key={key}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className={`
                                            flex items-center gap-2 px-3 py-2 rounded-md text-sm transition
                                            ${isActive
                                            ? "bg-accent-subtle text-text"
                                            : "text-text-muted hover:bg-bg-muted hover:text-text"}
                                        `}
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
