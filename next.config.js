// const withPWA = require("next-pwa")({
//   dest: "public",
//   swSrc: "service-worker.js",
// });

module.exports =
  // withPWA(
  {
    swcMinify: true,
    images: {
      domains: ["media.graphassets.com"],
      // unoptimized: true,
    },
  };
// );
