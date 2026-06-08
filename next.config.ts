import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tools/mermaid-on-steroids",
        destination: "/tools/mermaid-on-steroids/index.html",
      },
    ];
  },
};

export default nextConfig;
