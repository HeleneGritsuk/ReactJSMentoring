const nodeExternals = require('webpack-node-externals');

module.exports = {
  name: 'server',
  mode: 'development',
  target: 'node',
  entry: './src/client/app/serverRenderer.js',
  externals: [nodeExternals()],
  output: {
    path: `${__dirname}/../public`,
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
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

};
