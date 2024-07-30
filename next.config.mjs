/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: './',
  basePath: "/public",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;