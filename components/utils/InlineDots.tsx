export default function InlineDots({mastery}: { mastery: number }) {
    return (
        <span className="flex gap-[2px] items-center">
            {Array.from({length: 5}, (_, i) => (
                <span
                    key={i}
                    className={`w-[4px] h-[4px] rounded-full ${
                        i < mastery ? "opacity-75" : "opacity-20"
                    } bg-current`}
                />
            ))}
        </span>
    );
}