const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  name: "server",
  target: "node",
  entry: "./src/client/app/serverRenderer.js",
  externals: [nodeExternals()],
  output: {
    filename: "./serverRenderer.js",
    libraryTarget: "commonjs2"
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          "css-loader/locals" // It doesn't embed CSS but only exports the identifier mappings.
        ]
      }
    ]
  }
});
