const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/scripts/index.js',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
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
      //css reveal
      {
        from: './node_modules/reveal.js/css/reveal.css',
        to: '../lib/reveal.css',
      },
      //css reveal simple theme
      {
        from: './node_modules/reveal.js/css/theme/simple.css',
        to: '../lib/simple.css',
      },
      // css code high lighting
      {
        from: './node_modules/highlight.js/styles/atom-one-dark.css',
        to: '../lib/atom-one-dark.css',
      },
    ]),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    contentBase: './',
    port: 5000,
  },
};
