/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  images: {
    imageSizes: [320, 480, 640, 750, 860, 970, 1080, 1200, 1470, 1920, 2048],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
    ],
  },
  output: 'export', // Required to export as a static site
  images: {
    unoptimized: true, // If using Next.js images, this is needed for static export
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio/' : '',
};

module.exports = nextConfig;
