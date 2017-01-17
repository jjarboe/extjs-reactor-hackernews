'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtJSReactWebpackPlugin = require('@extjs/reactor-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: {
        app: ["./assets/js/app"]
    },

    output: {
        path: 'build',
        publicPath: "/",
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
                include: ["./assets/js"]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css')
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
                exclude: /\/favicon.ico$/,
                include: ["./assets/img"],
                loader: 'file'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new ExtJSReactWebpackPlugin({
            sdk: 'ext',
            toolkit: 'modern',
            theme: 'theme-material'
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true
        })
    ],

    devServer: {
        contentBase: path.resolve("./build"),
        noInfo: true,
        hot: true
    }
};