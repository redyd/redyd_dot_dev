"use client";

import {useMemo, useState} from "react";
import Fuse from "fuse.js";
import ProjectsSection from "@/components/structures/ProjectsSection";
import {useAllProjects} from "@/hooks/useAllProjects";
import SearchBar from "@/components/utils/SearchBar";

export default function ProjectsClient() {
    const {projects, loading, error} = useAllProjects();
    const [query, setQuery] = useState("");

    const fuse = useMemo(() => new Fuse(projects ?? [], {
        keys: [
            "name",
            "description",
            "stacks.label",
        ],
        threshold: 0.35,
        minMatchCharLength: 2,
        ignoreLocation: true,
    }), [projects]);

    const filtered = useMemo(() => {
        if (!query.trim()) return projects ?? [];
        return fuse.search(query).map((r) => r.item);
    }, [query, fuse, projects]);

    return (
        <div className="flex flex-col gap-8">
            <div className="space-y-2">
                <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent)]">
                    Parcourir
                </p>
                <h1 className="heading text-4xl md:text-5xl font-bold">
                    Mes projets personnels et scolaire
                </h1>
            </div>

            <SearchBar
                className="w-full max-w-none"
                onSearch={setQuery}
                placeholder="Rechercher par titre, description, stack technique..."
            />

            <ProjectsSection projects={filtered} loading={loading} error={error} variant="list"/>
        </div>
    );
}
