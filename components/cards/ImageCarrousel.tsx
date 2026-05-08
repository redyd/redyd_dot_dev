import {useEffect, useState} from "react";
import Image from "next/image";

export default function ImageCarrousel({name, images}: {name: string, images: string[]}) {
    const [current, setCurrent] = useState(0);
    const [hovered, setHovered] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const hasMultiple = images.length > 1;

    function navigate(dir: 1 | -1) {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrent((c) => (c + dir + images.length) % images.length);
        setTimeout(() => setIsTransitioning(false), 300);
    }

    useEffect(() => {
        if (!hasMultiple || hovered) return;
        const interval = setInterval(() => navigate(1), 3000);
        return () => clearInterval(interval);
    }, [hovered, hasMultiple, isTransitioning]);

    return (
        <div
            className="relative h-44 bg-[var(--color-bg-muted)] overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>

            {images.map((src, i) => (
                <div
                    key={src}
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{opacity: i === current ? 1 : 0}}>
                    <Image
                        src={src}
                        alt={`${name} screenshot ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                    />
                </div>
            ))}

            {hasMultiple && (
                <>
                    <button
                        onClick={() => navigate(-1)}
                        aria-label="Image précédente"
                        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200"
                        style={{opacity: hovered ? 1 : 0, pointerEvents: hovered ? "auto" : "none"}}
                    >
                        ‹
                    </button>
                    <button
                        onClick={() => navigate(1)}
                        aria-label="Image suivante"
                        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-200"
                        style={{opacity: hovered ? 1 : 0, pointerEvents: hovered ? "auto" : "none"}}
                    >
                        ›
                    </button>
                </>
            )}

            {hasMultiple && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Image ${i + 1}`}
                            className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                            style={{
                                background: i === current
                                    ? "var(--color-accent)"
                                    : "rgba(255,255,255,0.5)",
                                transform: i === current ? "scale(1.3)" : "scale(1)",
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}