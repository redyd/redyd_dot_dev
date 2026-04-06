"use client";

import {exposedServices, localServices, settings} from "@/data/services.data";
import SectionHeader from "@/components/structures/SectionHeader";
import ServiceCard from "@/components/cards/ServicesCard";
import {useEffect, useState} from "react";
import {ExposedService, LocalService} from "@/types/services.t";
import LoaderOverlay from "@/components/utils/Loader";

export default function AdminPage() {
    const {ip, base_url} = settings;
    const [exposed, setExposed] = useState<ExposedService[] | null>(null);
    const [local, setLocal] = useState<LocalService[] | null>(null);

    useEffect(() => {
        exposedServices.then(setExposed);
        localServices.then(setLocal);
    }, []);

    if (exposed === null || local === null) {
        return <LoaderOverlay/>;
    }

    return (
        <div>
            <section>
                <SectionHeader
                    label="local services"
                    badge="tailscale"
                    count={local.length}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {local.map((s) => {
                        const url = `http://${ip}:${s.port}${s.url_suffix ? `/${s.url_suffix}` : ""}`;
                        return (
                            <ServiceCard
                                key={s.port}
                                label={s.label}
                                meta={`:${s.port}`}
                                href={url}
                                variant="local"
                            />
                        );
                    })}
                </div>
            </section>

            <section>
                <SectionHeader
                    label="exposed services"
                    badge="public"
                    count={exposed.length}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                    {exposed.map((s) => {
                        const url = `https://${s.url_prefix}.${base_url}${s.url_suffix ? `/${s.url_suffix}` : ""}`;
                        return (
                            <ServiceCard
                                key={s.url_prefix}
                                label={s.label}
                                meta={`${s.url_prefix}.${base_url}`}
                                href={url}
                                variant="exposed"
                            />
                        );
                    })}
                </div>
            </section>
        </div>
    );
}