const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const { baseConfig, clientConfig } = require('./webpack.config');

const devConfig = {
  mode: 'development',
  entry: {
    app: './src/client/index.jsx',
  },
  plugins: [
    new Dotenv(),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './public',
    watchContentBase: true,
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4000/api/v1',
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};

module.exports = merge(baseConfig, devConfig, clientConfig);
