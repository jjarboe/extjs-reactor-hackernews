'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtJSReactorWebpackPlugin = require('@extjs/reactor-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: path.resolve('assets/js/app'),

    output: {
        path: path.resolve('build'),
        publicPath: '/',
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
                loader: "babel-loader",
                include: [path.join(__dirname, 'assets', 'js')]
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|json)(\?.*)?$/,
                exclude: /\/favicon.ico$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [
        new ExtJSReactorWebpackPlugin({
            sdk: 'ext', // you need to copy the Ext JS SDK to the root of this package, or you can specify a full path to some other location
            theme: 'theme-material',
            packages: ['d3']
        }),
        new HtmlWebpackPlugin({
            template: 'index.ejs',
            inject: 'head',
            hash: true
        })
    ],

    devServer: {
        contentBase: [
            path.resolve("./"),
            path.resolve("./build"),
        ],
        noInfo: true,
        hot: true
    }
};
