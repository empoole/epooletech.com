const path = require('path')

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
      historyApiFallback: true,
      static: path.resolve(__dirname, './public/dist'),
      open: true,
      compress: true,
      hot: true,
      port: 8080,
    },

    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: '[name].bundle.js',
    },

    plugins: [
        new CleanWebpackPlugin(),
        // Only update what has changed on hot reload
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            // JavaScript
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
}

