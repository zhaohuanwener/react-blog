var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.base')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const proxy = require('./proxy')



module.exports = merge(baseWebpackConfig, {
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"development"'
          }
      }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        }),
        // new webpack.NoEmitOnErrorsPlugin()
      ]
})