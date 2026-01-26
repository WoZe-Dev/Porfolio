/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Optimisations de performance
    swcMinify: true,
    compiler: {
      removeConsole: process.env.NODE_ENV === 'production',
    },
    // Configuration WebSocket pour HMR
    assetPrefix: process.env.NODE_ENV === 'production' ? '' : undefined,
    // Optimiser les images
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
        {
          protocol: 'https',
          hostname: 'lastfm.freetls.fastly.net',
        },
      ],
      formats: ['image/avif', 'image/webp'],
      deviceSizes: [640, 750, 828, 1080, 1200],
      imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    // Optimisations générales
    poweredByHeader: false,
    compress: true,
  };
  
  export default nextConfig;