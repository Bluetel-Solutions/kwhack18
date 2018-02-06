const { resolve } = require('path')

module.exports = _ => {

  return {
    context: resolve('src'),
    entry: {
      app: './client.js'
		},
		module : {
			loaders : [
				{
					test : /\.jsx/,
					loader : 'babel-loader'
				}
			]
		},
    output: {
      filename: '[name].js',
      path: resolve('dist'),
    }
  }
};
