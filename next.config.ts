import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Указываем GitHub Pages, что файлы лежат в подпапке репозитория
  basePath: '/Personal-project-attention-span-Yeskendir',
  assetPrefix: '/Personal-project-attention-span-Yeskendir',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
