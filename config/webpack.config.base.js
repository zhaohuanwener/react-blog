const path = require('path')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'app.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.json'],
    },
    module: {
        rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          include: [resolve('src')],
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
          }
        },
        {
          test: /\.(less|css)$/,
          use:[ 'style-loader','css-loader','less-loader'],
        },
        // {test: /\.less$/, use: ['style-loader', 'style!css!less']}
      ]
    }
}