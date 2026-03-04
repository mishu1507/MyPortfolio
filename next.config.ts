import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";
const basePath = isProduction ? "/MyPortfolio" : "";

const nextConfig: NextConfig = {
  output: "export",

  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
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
