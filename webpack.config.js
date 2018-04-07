const path = require('path');
const app = __dirname + '/app';
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  // context: app,
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'css-loader' }],
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Reveal: 'reveal.js',
    }),
    new CopyWebpackPlugin([
      // marked
      {
        from: './node_modules/reveal.js/plugin/markdown/marked.js',
        to: '../lib/marked.js',
      },
      // markdown
      {
        from: './node_modules/reveal.js/plugin/markdown/markdown.js',
        to: '../lib/markdown.js',
      },
      // head
      {
        from: './node_modules/reveal.js/lib/js/head.min.js',
        to: '../lib/head.js',
      },
    ]),
  ],
  devServer: {
    contentBase: ['.', path.join(__dirname, 'slides/')],
    port: 9000,
  },
};
