const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  entry: devMode ? './src/client/index.jsx' : {
    app: './src/client/index.jsx',
    server: './index.js',
  },
  target: devMode ? 'web' : 'node',
  output: {
    path: `${__dirname}/dist`,
    filename: devMode ? 'app.js' : '[name].js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    contentBase: './public',
    watchContentBase: true,
    /*
    proxy: [
      {
        context: ['/api'],
        target: process.env.API_HOST,
        secure: false,
      },
    ],
    */
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: `${__dirname}/node_modules`,
      app: `${__dirname}/src`,
    },
  },
  plugins: [
    new Dotenv(),
    new webpack.ProgressPlugin(),
    new CopyWebpackPlugin(['public']),
    new MiniCssExtractPlugin({
      filename: devMode ? '[name].css' : '[name].[hash].css',
      chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
            plugins: ['transform-object-rest-spread', 'transform-class-properties'],
          },
        },
      },
      /*
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        use: 'file-loader',
      },
      */
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
};
