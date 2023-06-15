/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compiler: {
    emotion: {
      sourceMap: true,
      autoLabel: "dev-only",
      labelFormat: "[dirname]-[filename]-[local]",
    },
  },
};

module.exports = nextConfig;
