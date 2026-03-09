import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Обязательно для генерации папки /out
  basePath: '/Personal-project-attention-span-Yeskendir',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
