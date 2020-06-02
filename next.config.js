const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withFonts = require('nextjs-fonts');
const webpack = require("webpack");
const path = require("path");

module.exports = withPlugins([[withSass], [withFonts], [withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  }
});
