// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // preserve your existing basePath + assetPrefix
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  reactStrictMode: true,

  // webpack alias to redirect every `import Image from 'next/image'`
  // to our own lightweight wrapper
  webpack(config) {
    config.resolve.alias['next/image'] = path.resolve(__dirname, 'lib/unoptimized-image.js');
    return config;
  },
};

module.exports = nextConfig;
