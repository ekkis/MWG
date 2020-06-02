const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
const withFonts = require('next-fonts')
const webpack = require('webpack')
const path = require('path')

module.exports = withPlugins([[withSass], [withImages], [withFonts]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve('./'))
    return config
  }
})
