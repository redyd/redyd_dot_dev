import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Espace caché",
    robots: {
        index: false,
        follow: false,
    },
};

export default function HiddenPage() {
    return <div className="mx-auto max-w-7xl px-6 py-10 space-y-12 w-full">Coming soon</div>
}
