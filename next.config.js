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
};

module.exports = nextConfig;
