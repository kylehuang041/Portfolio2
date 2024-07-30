/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: './',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;