import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  eslint: {
      ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
