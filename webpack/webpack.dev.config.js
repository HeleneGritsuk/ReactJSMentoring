const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function config(env, options) {
  return {
    entry: `${__dirname}/../src/client/app/index.js`,
    output: {
      path: `${__dirname}/../public`,
      filename: 'bundle.js',
      publicPath: '/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    },
    module: {
      rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
        }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff|jpg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]?[hash]',
        },
      },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/../src/client/index.html`,
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
    ],
  };
};
