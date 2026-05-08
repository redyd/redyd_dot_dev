export default function ErrorText({content}: { content: string }) {
    return (
        <p className="text-sm text-[var(--color-text-muted)] italic">{content}</p>
    )
}