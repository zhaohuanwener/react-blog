var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.config.base')
var HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const proxy = require('./proxy')

const PORT = 8080

const config = merge(baseWebpackConfig, {
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}/`
  ],
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    port: PORT,
    open: false,
    overlay: true,
    publicPath: '/',
    proxy,
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.NamedModulesPlugin(),
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

module.exports = config