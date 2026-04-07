import PublicHeader from "@/components/structures/PublicHeader";

export default function PublicLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <PublicHeader/>
            <main className="mx-auto max-w-7xl px-6 py-10 space-y-12">
                {children}
            </main>
        </div>
    )
}