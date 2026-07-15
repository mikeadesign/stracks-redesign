import type { NextConfig } from "next";

// Set by the GitHub Pages workflow only — project sites serve from
// /<repo-name>/, not the domain root, so assets/links need the prefix.
const basePath = process.env.GITHUB_PAGES === "true" ? "/stracks-redesign" : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
