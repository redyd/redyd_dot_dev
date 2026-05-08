import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.redyd.dev",
                pathname: "/api/files/**",
            },
        ],
    },
};

export default nextConfig;
