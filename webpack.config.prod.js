const merge = require('webpack-merge');
const { baseConfig, clientConfig, serverConfig } = require('./webpack.config');

const prodConfig = {
  mode: 'production',
};

module.exports = [
  merge(baseConfig, prodConfig, clientConfig),
  merge(baseConfig, prodConfig, serverConfig),
];
