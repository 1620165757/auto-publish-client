const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: "production",
    entry: {
        // webpackTest1: path.resolve(__dirname, '../src/webpackTest/webpackTest1.js'),
        index: path.resolve(__dirname, '../index.js'),
    },
    devtool: false,
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[contenthash:8].js',
        publicPath: '/',
        chunkFilename: 'static/js/[name].[contenthash:8].js'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./publish/index.html"
        }),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {minifyFontValues: {removeQuotes: true}}],
            },
            cssProcessorOptions: {
                map: false
            },
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/file.[id].[contenthash:8].css',
            chunkFilename: 'static/css/chunk.[id].[contenthash:8].css',
        }),
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-nullish-coalescing-operator",
                            "@babel/plugin-proposal-optional-chaining"
                        ]
                    }
                }
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            maxInitialRequests: 3,
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors',
                },
                common1: {
                    chunks: 'all',
                    minSize: 0,
                    test: /[\\/]src\/test[\\/]/,
                    minChunks: 1,
                    priority: -20,
                    reuseExistingChunk: true,
                    name: 'common1',
                },
                common2: {
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1,
                    test: /[\\/]src\/webpackTest[\\/]/,
                    priority: -20,
                    reuseExistingChunk: true,
                    name: 'common2',
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },
    performance: false,
};
