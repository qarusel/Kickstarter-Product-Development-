import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Если твой репозиторий называется иначе, замени текст ниже
  basePath: '/Kickstarter-Product-Development-',
  assetPrefix: '/Kickstarter-Product-Development-',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
