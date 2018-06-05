const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const common = require('./webpack.config.common');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = merge(common, {
  name: 'client',
  target: 'web',

  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    `${__dirname}/../src/client/app/index.js`,
  ].filter(Boolean),

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        // use: [
        //   isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       modules: true,
        //       localIdentName: '[name]-[hash:5]',
        //     },
        //   },
        // ],
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
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
    !isDevMod && new CleanWebpackPlugin('./public', { root: path.resolve(__dirname, '../') }),
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    /**
     * This plugin extract CSS into separate files.
     * It creates a CSS file per JS file which contains CSS.
     * It supports On-Demand-Loading of CSS and SourceMaps.
     * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
     */
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ].filter(Boolean),
});
