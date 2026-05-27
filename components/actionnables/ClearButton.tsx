"use client";

interface ClearButtonProps {
    onClear: () => void;
}

export function ClearButton({onClear}: ClearButtonProps) {
    return (
        <button
            onClick={onClear}
            className="cursor-pointer inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-bg text-text-muted hover:text-danger hover:border-danger/40 transition-colors duration-150"
        >
            Nouvelle session
        </button>
    );
}
