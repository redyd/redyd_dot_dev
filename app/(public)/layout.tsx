import Header from "@/components/structures/Header";
import {NavBarItem} from "@/types/navigation.t";
import {BookOpen, House, Menu, PanelsTopLeft, X} from "lucide-react";

const iconSize = 16;
const navbarItems: NavBarItem[] = [
    {name: "Home", href: "/", icon: <House size={iconSize}/>},
    {name: "Projets", href: "/projects", icon: <PanelsTopLeft size={iconSize}/>},
    {name: "Biographie", href: "/biographie", icon: <BookOpen size={iconSize}/>}
];

export default function PublicLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <Header navbarItems={navbarItems}/>
            <main className="mx-auto max-w-7xl px-6 py-10 space-y-12">
                {children}
            </main>
        </div>
    )
}