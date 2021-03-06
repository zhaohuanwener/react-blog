const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.dev')
const proxy = require('../config/proxy')
const http = require('http')
// console.log(proxy)

const complier = webpack(config)

const server = new WebpackDevServer(complier, {
    hot: true,
    // stats: 'errors-only',
    compress: false,
    inline: true,
    proxy,
    overlay: true,
    historyApiFallback: true,
    progress: true,
})

const port = 8080

server.listen(port)
console.log('server listing on http://localhost:%d', port)