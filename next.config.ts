import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Указываем название твоего текущего репозитория
  basePath: '/Kickstarter-Product-Development-',
  assetPrefix: '/Kickstarter-Product-Development-',
  images: {
    unoptimized: true,
  },
  // Это важно для корректных ссылок на страницы типа /about
  trailingSlash: true,
};

export default nextConfig;
