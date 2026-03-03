import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",                 

  basePath: "/MyPortfolio",         
  assetPrefix: "/MyPortfolio/",    

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
