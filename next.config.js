/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['media.graphassets.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
};

// Merge MDX config with Next.js config
module.exports = nextConfig;
