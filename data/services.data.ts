import {ExposedService, Host, LocalService} from "@/types/services.t";

export const localServices: Promise<LocalService[]> = new Promise<LocalService[]>((resolve) => {
    resolve([
        {
            label: "Admin panel",
            port: 1000
        },
        {
            label: "Nginx Proxy Manager - Api",
            port: 80
        },
        {
            label: "Nginx Proxy Manager - Pannel",
            port: 81
        },
        {
            label: "Dashdot - Server stats",
            port: 3001
        },
        {
            label: "Ticketa - Admin",
            port: 8090,
            url_suffix: "_/"
        },
        {
            label: "Portainer",
            port: 9000
        }
    ]);
});

export const exposedServices: Promise<ExposedService[]> = new Promise<ExposedService[]>((resolve) => {
    resolve([
        {
            label: "Registry Docker",
            url_prefix: "registry"
        },
        {
            label: "Uptime Kuma - Ping",
            url_prefix: "status"
        },
        {
            label: "Ticketa - API",
            url_prefix: "ticketa-api",
            url_suffix: "api"
        }
    ])
});

export const settings: Host = {
    base_url: "redyd.dev",
    ip: "100.95.33.24"
};
