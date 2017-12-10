const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('../config/webpack.config.dev')

const complier = webpack(config)

const server = new WebpackDevServer(complier)

server.listen(8080)