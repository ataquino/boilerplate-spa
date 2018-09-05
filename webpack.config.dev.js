const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const { baseConfig, clientConfig } = require('./webpack.config');

const devConfig = {
  mode: 'development',
  entry: {
    app: './src/client/index.jsx',
  },
  pugins: [
    new Dotenv(),

  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './public',
    watchContentBase: true,
  },
};

module.exports = merge(baseConfig, devConfig, clientConfig);
