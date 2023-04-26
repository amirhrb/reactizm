/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  // swSrc: 'service-worker.js',
});

const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
module.exports = withPWA(nextConfig);
