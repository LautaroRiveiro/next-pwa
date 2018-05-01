const NextWorkboxWebpackPlugin = require('./plugins/next-workbox-webpack-plugin/index')

module.exports = {
  webpack: (config, {isServer, dev, buildId, config: {distDir}}) => {
    if (!isServer && !dev) {
      config.plugins.push(new NextWorkboxWebpackPlugin({
        distDir,
        buildId
      }))
    }

    return config
  },
  exportPathMap: () => {
    return {
      '/': { page: '/' }
    }
  }
}