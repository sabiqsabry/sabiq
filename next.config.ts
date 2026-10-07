import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/tools/mermaid-on-steroids",
        destination: "/tools/mermaid-on-steroids/index.html",
      },
      {
        source: "/tools/drive-or-ride",
        destination: "/tools/drive-or-ride/index.html",
      },
    ];
  },
};

export default nextConfig;
