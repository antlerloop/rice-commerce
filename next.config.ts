import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/admin/:path*",
        destination: "/admin/:path*", // Redirects to your Sanity Studio folder
      },
    ];
  },
};

export default nextConfig;
