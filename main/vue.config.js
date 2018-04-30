const path = require('path')

module.exports = {
  css: {
    extract: false,
  },
  configureWebpack: {
    output: {
      filename: 'js/[name].js',
    },
    resolve: {
      alias: {
        config: path.resolve('./config'),
        utils: path.resolve('./src/utils'),
      }
    }
  }
}