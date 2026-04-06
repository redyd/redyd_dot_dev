export type LocalService = {
    port: number;
    label: string;
    url_suffix?: string;
}

export type ExposedService = {
    label: string;
    url_prefix: string;
    url_suffix?: string;
}

export type Host = {
    ip: string;
    base_url: string;
}