var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
var ExtractCssChunks = require("extract-css-chunks-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
var CircularDependencyPlugin = require('circular-dependency-plugin');

var config = require('./../config');

var BASE_PATH = process.env.BASE_PATH || '/';

module.exports = {
    devtool: 'inline-source-map',
    mode: 'production',
    entry: {
        app: ['react-hot-loader/patch', path.join(config.srcDir, 'index.js')]
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
            maximumFileSizeToCacheInBytes: 1.78e+7
        }),
        new ManifestPlugin({
            seed: ({
                name: "atlan IPL Task",
                short_name: "atlan IPL",
               icons: [
                {
                 src: "/static/android-icon-36x36.png",
                 sizes: "36x36",
                 type: "image/png",
                 density: "0.75"
                },
                {
                 src: "/static/android-icon-48x48.png",
                 sizes: "48x48",
                 type: "image/png",
                 density: "1.0"
                },
                {
                 src: "/static/android-icon-72x72.png",
                 sizes: "72x72",
                 type: "image/png",
                 density: "1.5"
                },
                {
                 src: "/static/android-icon-96x96.png",
                 sizes: "96x96",
                 type: "image/png",
                 density: "2.0"
                },
                {
                 src: "/static/android-icon-144x144.png",
                 sizes: "144x144",
                 type: "image/png",
                 density: "3.0"
                },
                {
                 src: "/static/android-icon-192x192.png",
                 sizes: "192x192",
                 type: "image/png",
                 density: "4.0",
                 purpose: "any maskable"
                },
                {
                 src: "/static/android-icon-512x512.png",
                 sizes: "512x512",
                 type: "image/png",
                 density: "5.0"
                }
               ],
               start_url: "/",
               display: "standalone",
               theme_color: "#00274d",
               background_color: "#001F3D"
            })
        }),
        new HtmlWebpackPlugin({
            template: config.srcHtmlLayout,
            inject: false
        }),
        new webpack.HashedModuleIdsPlugin(),
        new ExtractCssChunks(),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.BASE_PATH': JSON.stringify(BASE_PATH),
        })
    ],
    optimization: {
        minimizer: [new TerserPlugin()]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: config.srcDir,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            // Modular Styles
            {
                test: /\.css$/,
                use: [
                    ExtractCssChunks.loader,
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
                    ExtractCssChunks.loader,
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
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader' }
                ],
                include: [config.srcDir]
            },
            {
                test: /\.scss$/,
                use: [
                    ExtractCssChunks.loader,
                    { loader: 'css-loader' }, 
                    { loader: 'postcss-loader' }, 
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
        hot: false,
        contentBase: config.distDir,
        compress: true,
        historyApiFallback: {
            index: BASE_PATH
        },
        host: "https://atlan-task-d55a8.web.app/",
    }
}