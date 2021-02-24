const path = require('path');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = {
    mode: "development",
    devtool: 'cheap-module-eval-source-map',
    // devtool: 'source-map',
    devServer: {
        open: true,
        port: 8080,
        historyApiFallback: true,
        hot: true,
    },
};

module.exports = merge(commonConfig, devConfig);
