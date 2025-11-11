import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images directly from the public directory to ensure they load in static deployments.
    unoptimized: true,
  },
};

export default nextConfig;
