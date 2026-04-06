"use client";

import {exposedServices, localServices, settings} from "@/data/services.data";
import SectionHeader from "@/components/structures/SectionHeader";
import ServiceCard from "@/components/cards/ServicesCard";

export default function AdminPage() {
    const {ip, base_url} = settings;

    return (
        <div>
            <main className="mx-auto max-w-5xl px-6 py-10 space-y-12">
                <section>
                    <SectionHeader
                        label="local services"
                        badge="tailscale"
                        count={localServices.length}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                        {localServices.map((s) => {
                            const url = `http://${ip}:${s.port}`;
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
                        count={exposedServices.length}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                        {exposedServices.map((s) => {
                            const url = `https://${s.url_prefix}.${base_url}`;
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
            </main>
        </div>
    );
}