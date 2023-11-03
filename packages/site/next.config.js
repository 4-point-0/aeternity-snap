/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer, webpack, nextRuntime }) => {
    config.module.rules.push({
      test: /\.node$/,
      use:  "node-loader",
    });

    return config;
  },
};

module.exports = nextConfig
