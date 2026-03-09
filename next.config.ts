import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Указываем GitHub Pages, где искать стили и картинки
  basePath: '/Personal-project-attention-span-Yeskendir',
  assetPrefix: '/Personal-project-attention-span-Yeskendir',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
