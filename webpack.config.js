const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const browserConfig = {
  mode: "production",
  devServer: {
    contentBase: './public',
    open: true,
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, 'src', 'browser', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    }),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src', 'assets', 'robots.txt'), to: '.' },
        { from: path.resolve(__dirname, 'src', 'assets', 'favicon.ico'), to: '.' },
      ],
    }),
  ]
}

module.exports = [browserConfig]
