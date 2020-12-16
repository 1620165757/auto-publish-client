const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, '../index.tsx')
    },
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/[name].[contenthash:8].js',
        publicPath:'/'
        // chunkFilename: 'static/js/[name].[contenthash:8].chunk.js'
    },
    devServer: {
        historyApiFallback: true,
        publicPath: '/'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./publish/index.html"
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default', {minifyFontValues: {removeQuotes: true}}],
            },
            cssProcessorOptions: {
                map: {
                    inline: true
                }
            },
            canPrint: true
        }),
        new MiniCssExtractPlugin({
            filename: 'static/css/file.[id].[contenthash:8].css',
            chunkFilename: 'static/css/chunk.[id].[contenthash:8].css',
        }),
    ],
    resolve: {
        extensions: [".js", ".ts", ".tsx", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: '/node-modules/',
                include: [path.resolve('./src'), path.resolve('./axios')],
                use: 'babel-loader'
            },
            {
                test: /\.(ts|tsx)?$/,
                use: "ts-loader"
            },
            {
                test: /\.(css|less)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'initial',
            cacheGroups: {
                vendor: {
                    priority: 1,
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor-chunk',
                    minSize: 0,
                    minChunks: 1
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`,
        },
    },
    performance: false,
};
