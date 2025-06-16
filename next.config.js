// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // keep your existing basePath + assetPrefix from env
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,

  reactStrictMode: true,

  images: {
    // swap out Next.js’s default Image API for a no-op loader
    loader: 'custom',
    loaderFile: './imageLoader.js'
  }
};

module.exports = nextConfig;
