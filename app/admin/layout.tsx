import AdminNavBar from "@/components/structures/AdminHeader";

export default function AdminLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <AdminNavBar/>
            <main className="mx-auto max-w-5xl px-6 py-10 space-y-12">
                {children}
            </main>
        </div>
    )
}