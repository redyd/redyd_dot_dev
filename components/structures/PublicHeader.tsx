import {ThemeToggle} from "@/components/actionnables/ThemeToggle";
import {NavBarItem} from "@/types/navigation.t";
import {House, PanelsTopLeft} from "lucide-react";
import Link from "next/link";

const navbarItems: NavBarItem[] = [
    {
        name: "Home",
        href: "/",
        icon: <House size={15}/>,
    },
    {
        name: "Projets",
        href: "/projects",
        icon: <PanelsTopLeft size={15} />
    }
];

export default function PublicHeader() {
    return (
        <nav className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium tracking-tight text-text">redyd.dev</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted">
                    {navbarItems.map((item, key) => (
                        <Link
                            key={key}
                            href={item.href}
                            className="flex items-center gap-2 h-14 px-2 hover:text-text transition-colors"
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                    ))}
                </div>

                <ThemeToggle/>
            </div>
        </nav>
    )
}