const { resolve } = require('path')

module.exports = _ => {

  return {
    context: resolve('src'),
    entry: {
      app: './client.js'
    },
    output: {
      filename: '[name].js',
      path: resolve('dist'),
    },
  }
};
