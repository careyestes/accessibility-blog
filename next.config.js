// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  // preserve your basePath + assetPrefix
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  reactStrictMode: true,

  webpack(config) {
    // whenever code does `import Image from 'next/image'`,
    // substitute it with our unoptimized wrapper
    config.resolve.alias['next/image'] = path.resolve(
      __dirname,
      'lib/unoptimized-image.js'
    );
    return config;
  },
};
