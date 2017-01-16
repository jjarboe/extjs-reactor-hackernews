'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        path.resolve('assets/js/app')
    ],

    output: {
        path: 'build',
        filename: 'index.js'
    },

    resolve: {
        alias: {
            "react-dom": path.resolve('./node_modules/react-dom')
        }
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: "babel",
                exclude: /(node_modules|ext|extjs)/,
                include: [path.join(__dirname, 'assets', 'js')]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                exclude: /\/favicon.ico$/,
                include: [path.join(__dirname, 'assets', 'img')],
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css')
    ],

    devServer: {
        contentBase: path.resolve("./build"),
        noInfo: true,
        hot: true
    }
};