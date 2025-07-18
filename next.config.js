/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Removed to use default build mode
    eslint: {
      ignoreDuringBuilds: true,
    },
    images: { unoptimized: true },
  };
  
  module.exports = nextConfig;
  