/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove turbopack config for Vercel compatibility
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ];
  },
  // Optimize for production builds
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material'],
  },
  // Better error handling in production
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
