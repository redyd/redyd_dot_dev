import ExternalButton from "@/components/actionnables/ExternalButton";

type Props = {
    label: string;
    meta: string;
    href: string;
    variant: "local" | "exposed";
};

export default function ServiceCard({label, meta, href, variant}: Props) {
    const dot =
        variant === "local"
            ? "bg-accent"
            : "bg-success";

    return (
        <div
            className="group relative flex flex-col justify-between gap-4 rounded-xl border border-border bg-bg-subtle p-4 hover:border-border-strong hover:bg-bg-muted transition-colors duration-150">
            {/* AdminHeader */}
            <div className="flex items-start gap-2">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${dot}`}/>
                <span className="text-sm font-medium text-text leading-snug">{label}</span>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono text-text-subtle truncate">{meta}</span>
                <ExternalButton label="Open" href={href}/>
            </div>
        </div>
    );
}