const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isDevMod = process.env.NODE_ENV === "development";

module.exports = {
  mode: process.env.NODE_ENV,

  output: {
    filename: "bundle.js",
    path: `${__dirname}/../public`,
    publicPath: "/"
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //       options: {
      //         minimize: !isDevMod
      //       }
      //     }
      //   ]
      // }
    ]
  },

  plugins: [
    isDevMod
      ? new webpack.NamedModulesPlugin()
      : new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: `${__dirname}/../src/client/index.html`
    })
  ]
};
