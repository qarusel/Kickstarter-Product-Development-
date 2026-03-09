import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Указываем путь к твоему репозиторию, чтобы CSS и картинки не терялись
  basePath: '/Kickstarter-Product-Development-',
  assetPrefix: '/Kickstarter-Product-Development-',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
