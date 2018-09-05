const webpack = require('webpack');
const path = require('path');

const baseConfig = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: `${__dirname}/node_modules`,
      app: `${__dirname}/src`,
    },
  },
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
      {
        test: /\.(png|jpg)$/,
        use: 'url-loader?limit=8192',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ],
};

const clientConfig = {
  target: 'web',
  entry: {
    app: './src/client/index.jsx',
  },
};

const serverConfig = {
  target: 'node',
  entry: {
    server: './src/server.jsx',
  },
  node: {
    __dirname: false,
  },
};

module.exports = {
  baseConfig,
  clientConfig,
  serverConfig,
};
