"use client";

import Link from "next/link";
import Header from "@/components/structures/Header";
import {NavBarItem} from "@/types/navigation.t";
import {Bot, BookLock, X, ArrowBigLeft} from "lucide-react";
import AiLineIcon from '@iconify-react/mingcute/ai-line';

const iconSize = 16;
const navbarItems: NavBarItem[] = [
   {name: "Home", href: "/hidden", icon: <BookLock size={iconSize}/>},
    {name: "Timini Gimini", href: "/hidden/timini-gimini", icon: <AiLineIcon width={String(iconSize)} height={String(iconSize)} />},
    // {name: "Singeur", href: "/hidden/bot-singeur", icon: <Bot size={iconSize}/>}
];

export default function HiddenLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="h-full flex flex-col overflow-hidden">
            <Header
                navbarItems={navbarItems}
                leading={
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-bg text-text-muted hover:text-text hover:border-border-strong transition-colors duration-150"
                    >
                        <ArrowBigLeft size={iconSize}/>
                        <span>Retour</span>
                    </Link>
                }
            />
            <main className="flex-1 overflow-hidden">
                {children}
            </main>
        </div>
    );
}