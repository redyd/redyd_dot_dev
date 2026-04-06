import Link from "next/link";

type Props = {
    label: string;
    href: string;
}

export default function ExternalButton({href, label}: Props) {
    return (
        <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-bg text-text-muted hover:text-text hover:border-border-strong transition-colors duration-150"
        >
            <span>{label}</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-3.5 h-3.5"
            >
                <path
                    d="M12.5 3a.75.75 0 000 1.5h1.69l-4.97 4.97a.75.75 0 101.06 1.06l4.97-4.97v1.69a.75.75 0 001.5 0V3h-4.25z"/>
                <path
                    d="M5 5.75A1.75 1.75 0 016.75 4h3a.75.75 0 000-1.5h-3A3.25 3.25 0 003.5 5.75v7.5A3.25 3.25 0 006.75 16.5h7.5A3.25 3.25 0 0017.5 13.25v-3a.75.75 0 00-1.5 0v3A1.75 1.75 0 0114.25 15h-7.5A1.75 1.75 0 015 13.25v-7.5z"/>
            </svg>
        </Link>
    );
}
