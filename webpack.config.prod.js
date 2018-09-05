const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const { baseConfig, clientConfig, serverConfig } = require('./webpack.config');

const prodConfig = {
  mode: 'production',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        PORT: process.env.PORT,
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
    new CopyWebpackPlugin(['public'], {
      ignore: ['index.html'],
    }),
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        exclude: /server\.js/,
      }),
    ],
  },
};

module.exports = [
  merge(baseConfig, prodConfig, clientConfig),
  merge(baseConfig, prodConfig, serverConfig),
];
