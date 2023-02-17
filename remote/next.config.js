/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config, options) => {
    Object.assign(config.experiments, { topLevelAwait: true });

    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "remote",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./Layout": "./components/container/LayoutContainer",
          },
          remotes: {},
        })
      );
    }

    config.optimization = {
      ...config.optimization,
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
    };
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "static/chunks/css/[name].css",
      })
    );
    config.module.rules.push({
      test: /\.(scss|less|sass|css)$/,
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    });

    return config;
  },
};

module.exports = nextConfig;
