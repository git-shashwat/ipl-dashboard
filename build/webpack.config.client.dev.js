var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
var CircularDependencyPlugin = require('circular-dependency-plugin');
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");

var config = require('./../config');

var BASE_PATH = process.env.BASE_PATH || '/';

module.exports = {
    name: 'client',
    devtool: 'cheap-eval-source-map',
    target: 'web',
    mode: 'development',
    entry: {
        app: [path.join(config.srcDir, 'index.js')]
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].chunk.js',
        path: config.distDir,
        publicPath: BASE_PATH
    },
    resolve: {
        modules: [
            'node_modules',
            config.srcDir
        ]
    },
    plugins: [
        new CircularDependencyPlugin({
            exclude: /a\.js|node_modules/,
            failOnError: true,
            allowAsyncCycles: false,
            cwd: process.cwd(),
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 1.78e+8
        }),
        new HtmlWebpackPlugin({
            template: config.srcHtmlLayout,
            inject: false,
            chunksSortMode: 'none'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.BASE_PATH': JSON.stringify(BASE_PATH),
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractCssChunks(),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            // Modular Styles
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' }
                ],
                exclude: [config.srcDir],
                include: [config.srcDir]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                        }
                    },
                    { loader: 'postcss-loader' },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: config.scssIncludes
                        }
                    }
                ],
                exclude: [config.srcDir],
                include: [config.srcDir]
            },
            // Global Styles
            {
                test: /\.css$/,
                use: [
                    ExtractCssChunks.loader,
                    'css-loader',
                    'postcss-loader'
                ],
                include: [path.resolve(config.srcDir, 'styles')]
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCssChunks.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: config.scssIncludes
                        }
                    }
                ],
                include: [config.srcDir]
            },
            // Fonts
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                }
            },
            // Files
            {
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
                loader: "file-loader",
                options: {
                    name: "static/[name].[ext]",
                }
            }
        ]
    },
    devServer: {
        hot: true,
        contentBase: config.serveDir,
        compress: true,
        historyApiFallback: {
            index: BASE_PATH
        },
        host: '127.0.0.1',
        port: 3000
    }
}