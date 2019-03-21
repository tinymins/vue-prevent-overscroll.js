const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const EslintFriendlyFormatter = require('eslint-friendly-formatter');
const { resolve } = require('./utils');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          emitWarning: true,
          cache: true,
          formatter: EslintFriendlyFormatter,
        },
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devtool: '#cheap-eval-source-map',
  devServer: {
    port: 9001,
    hot: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    stats: {
      entrypoints: false,
      children: false,
      modules: false,
      warnings: false,
      assets: false,
      version: false,
      builtAt: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('./src/index.html'),
      favicon: resolve('./src/assets/favicon.png'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new StyleLintPlugin({
      configFile: resolve('.stylelintrc.js'),
      files: '**/*.{less,scss,sass,vue}',
    }),
  ],
});
