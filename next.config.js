/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.graphassets.com',
      'avatars.githubusercontent.com',
      'images.ctfassets.net',
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
