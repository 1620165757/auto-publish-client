const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const glob = require("glob-all");
// const PurgecssPlugin = require("purgecss-webpack-plugin");
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// const Dashboard = require('webpack-dashboard');
// const DashboardPlugin = require('webpack-dashboard/plugin');
// const dashboard = new Dashboard();
module.exports = {
    entry: {
        // webpackIndex1: path.resolve(__dirname, '../src/webpackTest/webpackIndex1.js'),
        // webpackIndex2: path.resolve(__dirname, '../src/webpackTest/webpackIndex2.js'),
        // webpackIndex3: path.resolve(__dirname, '../src/webpackTest/webpackIndex3.js'),
        index: path.resolve(__dirname, '../src/index.tsx'),
        // vendor:['react']
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'static/js/[name].[hash:8].js',
        publicPath: '/',
        chunkFilename: 'static/js/[name].[hash:8].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-react',
                                '@babel/preset-typescript',
                                '@babel/preset-env'
                            ],
                            plugins: [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-proposal-nullish-coalescing-operator',
                                '@babel/plugin-proposal-optional-chaining'
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true,
                            }
                        }
                    }],
            },
        ]
    },
    plugins: [
        new HardSourceWebpackPlugin({
            // Either an absolute path or relative to webpack's options.context.
            // cacheDirectory: 'node_modules/.cache/hard-source/[confighash]',
            // Either a string of object hash function given a webpack config.
            // configHash: function(webpackConfig) {
            //     // node-object-hash on npm can be used to build this.
            //     return require('node-object-hash')({sort: false}).hash(webpackConfig);
            // },
            // // Either false, a string, an object, or a project hashing function.
            // environmentHash: {
            //     root: process.cwd(),
            //     directories: [],
            //     files: ['package-lock.json', 'yarn.lock'],
            // },
            // // An object.
            // info: {
            //     // 'none' or 'test'.
            //     mode: 'none',
            //     // 'debug', 'log', 'info', 'warn', or 'error'.
            //     level: 'debug',
            // },
            // // Clean up large, old caches automatically.
            // cachePrune: {
            //     // Caches younger than `maxAge` are not considered for deletion. They must
            //     // be at least this (default: 2 days) old in milliseconds.
            //     maxAge: 2 * 24 * 60 * 60 * 1000,
            //     // All caches together must be larger than `sizeThreshold` before any
            //     // caches will be deleted. Together they must be at least this
            //     // (default: 50 MB) big in bytes.
            //     sizeThreshold: 50 * 1024 * 1024
            // },
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './publish/index.html'
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
        // new PurgecssPlugin({
        //     paths: glob.sync([
        //         path.join(__dirname, '../src/**/*'),
        //     ], {
        //         nodir: true
        //     })
        // }),
        new MiniCssExtractPlugin({
            filename: 'static/css/[name].[contenthash:8].css',
            chunkFilename: 'static/css/[name].[contenthash:8].css',
        }),
        // new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            // // maxInitialRequests: 1,
            // chunks: 'initial',
            // minSize: 0,  // 对所有大小的模块 都进行拆分
            // minChunks: 1,
            cacheGroups: {
                vendors: {
                    chunks: 'all',
                    minSize: 0,
                    minChunks: 1,
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors',
                },
                // common1: {
                //     chunks: 'all',
                //     minSize: 0,
                //     test: /[\\/]src\/test[\\/]/,
                //     minChunks: 1,
                //     priority: -20,
                //     reuseExistingChunk: true,
                //     name: 'common1',
                // },
                // common2: {
                //     chunks: 'all',
                //     minSize: 0,
                //     minChunks: 1,
                //     test: /[\\/]src\/webpackTest\/page[\\/]/,
                //     priority: -20,
                //     reuseExistingChunk: true,
                //     name: 'common2',
                // }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.json']
    },
};