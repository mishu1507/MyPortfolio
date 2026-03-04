import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/MyPortfolio",
  assetPrefix: "/MyPortfolio/",

  env: {
    NEXT_PUBLIC_BASE_PATH: "/MyPortfolio",
  },

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
