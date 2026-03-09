import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Personal-project-attention-span-Yeskendir',
  assetPrefix: '/Personal-project-attention-span-Yeskendir',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Добавь эту строку, она помогает путям на GitHub Pages
};

export default nextConfig;
