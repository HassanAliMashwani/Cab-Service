import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/local-everyday-transport",
        destination: "/services/tours-and-events-transport",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
