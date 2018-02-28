const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.dev')
const proxy = require('../config/proxy')

console.log(proxy)

const complier = webpack(config)

const server = new WebpackDevServer(complier, {
    hot: true,
    stats: 'errors-only',
    compress: false,
    inline: true,
    proxy,
    overlay: true,
    historyApiFallback: true,
    // set (app) {
    //     app.use('*', (req, res) => {

    //     })
    // }
})

const port = 8080

server.listen(port, () => console.log('server listing on localhost:%d', 8080))