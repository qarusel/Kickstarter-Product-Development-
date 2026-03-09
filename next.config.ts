import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Kickstarter-Product-Development-',
  assetPrefix: '/Kickstarter-Product-Development-',
  images: { unoptimized: true },
};
export default nextConfig;
