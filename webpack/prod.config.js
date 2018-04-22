const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
  entry: __dirname + '/../src/client/app/index.jsx',
  output: {
    path: __dirname + '/../public',
    filename: 'bundle.js'
  },
  // resolve: {
  //   extensions: [ '.js', '.jsx']
  // },
  module : {
    rules : [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader : 'babel-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
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

};
