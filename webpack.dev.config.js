const { merge } = require('webpack-merge');
const config = require('./webpack.config.js');

module.exports = merge(config, {
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
})