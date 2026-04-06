import {JSX} from "react";

type Props = {
    onClick?: () => void;
    aria_label?: string;
    icon?: JSX.Element;
};

export default function IconButton({onClick, aria_label, icon}: Props) {
    return (
        <button
            onClick={onClick}
            className="
    w-9 h-9 rounded-lg
    bg-bg-subtle hover:bg-bg-muted
    border border-border
    text-text-muted hover:text-text
    transition-colors hover:cursor-pointer
    flex items-center justify-center
  "
            aria-label={aria_label}
        >
            {icon}
        </button>
    )
}