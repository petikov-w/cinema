const path = require("path");
const StatoscopeWebpackPlugin = require('@statoscope/webpack-plugin').default;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack');
const mode = process.env.NODE_ENV;

module.exports = () => {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                title: "Cinema",
                template: path.join(__dirname, '../src/', 'index.html'),
                minify: (mode === 'development') ? false : true,
                // favicon: path.join(__dirname, "src", "favicon.ico"),
            }),
            new MiniCssExtractPlugin({
                filename: (mode === 'development') ? '[name].css' : '[name].[contenthash].css',
            }),
            new Dotenv({
                path: './.env.local',
            }),
            new StatoscopeWebpackPlugin(),
        ]
    }
}