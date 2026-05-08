import {Event, EventType} from "@/types/experiences.t";
import ErrorText from "@/components/texts/ErrorText";
import Loading from "@/components/utils/Loader";

type Props = {
    events: Event[] | null;
    error: string | null;
    loading: boolean;
    type: EventType;
}

function formatDate(date: string | Date) {
    return new Intl.DateTimeFormat("fr-FR", {
        month: "long",
        year: "numeric"
    }).format(new Date(date));
}

function parsePeriod(event: Event) {
    const begin = formatDate(event.begin);
    if (!event.end) {
        return `Depuis ${begin}`;
    }

    const end = formatDate(event.end);

    if (begin === end) return begin;

    return `${begin} - ${end}`;
}

export default function RoadMap({events, loading, error, type}: Props) {
    if (error) return <ErrorText content={error} />

    const filtered = !events ? [] : events.filter(e => e.type === type);

    return (
        <div
            className="flex flex-col gap-px relative"
            style={{borderLeft: "2px solid var(--color-border)", paddingLeft: "1.5rem"}}>
            {loading && <Loading />}
            {filtered && filtered.map((xp, i) => (
                <div key={i} className="relative flex flex-col gap-1 pb-8 last:pb-0">
                    <div
                        className="absolute rounded-full"
                        style={{
                            width: 10, height: 10,
                            left: "calc(-1.5rem - 6px)", top: 6,
                            backgroundColor: "var(--color-accent)",
                        }}
                    />
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div>
                            <span className="text-sm font-semibold text-[var(--color-text)]">{xp.role}</span>
                            <span className="text-sm text-[var(--color-text-muted)]">{" · "}{xp.company}</span>
                        </div>
                        <span className="text-xs text-[var(--color-text-subtle)] font-mono">{parsePeriod(xp)}</span>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{xp.description}</p>
                </div>
            ))}
        </div>
    )
}