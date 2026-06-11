import type { NextConfig } from "next";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repositoryName = "solidarity_congo";

const nextConfig: NextConfig = {
  basePath: isGitHubActions ? `/${repositoryName}` : undefined,
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  trailingSlash: true,
};

export default nextConfig;
