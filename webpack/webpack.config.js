const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (env, options) {
  const isProduction = options.mode === 'production';

  return {

    entry: __dirname + '/../src/client/app/index.js',
    output: {
      path: __dirname + '/../public',
      filename: 'bundle.js'
    },
    devtool: isProduction ? 'source-map' : 'eval',
    module: {
      rules: [{
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.html$/,
          use: [{
            loader: "html-loader",
            options: {
              minimize: isProduction ? true : false
            }
          }]
        },
        {
          test: /\.css$/,
          use: [
            { loader: isProduction ? MiniCssExtractPlugin.loader : "style-loader" },
            {
              loader: 'css-loader',
              options: {
                minimize: isProduction ? true : false
              }
            },
            { loader: 'postcss-loader' }
          ]
        },
        {
          test: /\.(ttf|eot|svg|woff|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          loader: "file-loader",
          options: {
            name: '[path][name].[ext]?[hash]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: __dirname + '/../src/client/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }

};
