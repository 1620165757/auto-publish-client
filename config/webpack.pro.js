const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');


const smp = new SpeedMeasurePlugin();

const proConfig = {
    mode: 'production',
    devtool: false,
    performance: false,
};

module.exports = smp.wrap(merge(commonConfig, proConfig));
