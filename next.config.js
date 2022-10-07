const withOffline = require("next-pwa")({
  dest: "public",
  swSrc: "service-worker.js",
});

module.exports = withOffline({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  swcMinify: true,
  images: {
    domains: ["media.graphassets.com"],
    unoptimized: true,
  },
});
