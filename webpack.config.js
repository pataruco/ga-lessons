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
  // plugins: [
  //   new webpack.ProvidePlugin({
  //     Reveal: 'reveal.js',
  //   }),
  //   new CopyWebpackPlugin([
  //     // speaker note base window
  //     {
  //       from: './node_modules/reveal.js/plugin/notes/notes.html',
  //       to: 'lib/js/reveal.js-dependencies/notes.html',
  //     },
  //     // styles for slides export to to pdf
  //     {
  //       from: { glob: './node_modules/reveal.js/css/print/*.css' },
  //       to: 'lib/css/[name].css',
  //     },
  //     // modified styles for menu.js plugin (compatible with inline svg)
  //     // { from: (configEnv.FOR_WEB || (configEnv.FONTAWESOME_ENGINE=='css') ? '../node_modules/reveal.js-menu/menu.css' : '_styles/menu-inline-svg.css', to: 'lib/css/menu.css' },
  //     // any files in content
  //     {
  //       context: 'content',
  //       from: '**/*',
  //       to: 'content/',
  //     },
  //     {
  //       from: '../node_modules/reveal.js-menu/menu.css',
  //       to: 'lib/css/menu.css',
  //     },
  //   ]),
  // ],
};
