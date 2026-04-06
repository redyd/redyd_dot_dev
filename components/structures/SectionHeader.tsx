type Props = {
    label: string;
    badge: string;
    count: number;
}

export default function SectionHeader({label, badge, count,}: Props) {
    return (
        <div className="flex items-center gap-3">
            <h2 className="text-xs font-medium uppercase tracking-widest text-text-muted">
                {label}
            </h2>
            <span
                className="text-xs font-mono px-2 py-0.5 rounded-md bg-bg-muted text-text-subtle border border-border">
        {badge}
      </span>
            <span className="ml-auto text-xs text-text-subtle font-mono">
        {count}
      </span>
        </div>
    );
}