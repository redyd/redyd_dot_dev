export type LocalService = {
    port: number;
    label: string;
}

export type ExposedService = {
    label: string;
    url_prefix: string;
}

export type Host = {
    ip: string;
    base_url: string;
}