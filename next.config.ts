import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**.music.126.net",
        },
        {
          protocol: "http",
          hostname: "**.music.126.net",
        },
      ],
    },
};

export default nextConfig;
