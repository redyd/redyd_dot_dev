import {settings} from "@/data/services.data";
import {ThemeToggle} from "@/components/actionnables/ThemeToggle";

export default function AdminHeader() {
    const {ip, base_url} = settings;

    return (
        <nav className="sticky top-0 z-10 border-b border-border bg-bg/80 backdrop-blur-sm">
            <div className="mx-auto max-w-5xl flex items-center justify-between px-6 h-14">
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium tracking-tight text-text">admin panel</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-text-muted font-mono">
                    <span>{ip}</span>
                    <span className="text-border">·</span>
                    <span>{base_url}</span>
                </div>
                <ThemeToggle/>
            </div>
        </nav>
    )
}