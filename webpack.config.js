const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
require('babel-register');



module.exports = {
    entry: ['@babel/polyfill', './src/domproject.js'],
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        open: true,
        hot: true    
    },
    module: {
        rules:[
            {   
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use : [MiniCssExtractPlugin.loader,'css-loader']
            }
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'es6 JS',
            template: 'first.html'
        }),
        new MiniCssExtractPlugin({
            filename : '[name].css',
            chunkFilename: '[id].css'
        })
    ],
}