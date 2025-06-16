// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // preserve your basePath + assetPrefix
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  reactStrictMode: true,

  // static‐export mode: no `next export` command needed
  output: 'export',

  // disable Image Optimization API on static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
