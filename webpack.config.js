
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const env = process.env.NODE_ENV || 'production';

const SRC = path.join(__dirname, 'src');
const NODE_MODULES = path.join(__dirname, 'node_modules');
const PUBLIC = path.join(__dirname, 'public');

const config = {
    entry: {
        app: './src/index',
        common: [
            'choo',
            'on-load',
            'yo-yoify'
        ],
    },
    output: {
        path: PUBLIC,
        filename: 'js/[name].js',
        publicPath: '/'
    },
    resolve: {
        modules: [
            SRC,
            NODE_MODULES
        ]
    },
    module: {
        rules: [
            {
                test: /.js?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/,
                include: SRC,
            },
            // {
            //     test: /\.css$/,
            //     loaders: ['style-loader', 'css-loader']
            // }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    devtool: 'source-map'
}

module.exports = config;