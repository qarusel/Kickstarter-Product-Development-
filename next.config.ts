import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal-project-attention-span-Yeskendir',
  assetPrefix: '/Personal-project-attention-span-Yeskendir',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
