const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { assetsPath, resolve } = require('./utils');
const baseConfig = require('./webpack.base.conf');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    preventoverscroll: resolve('src/directives/prevent-overscroll.js'),
  },
  output: {
    filename: '[name].js',
    library: 'PreventOverscroll',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devtool: '#source-map',
  stats: {
    entrypoints: false,
    children: false,
    modules: false,
    warnings: false,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: resolve('./src/index.html'),
    //   favicon: resolve('./src/assets/favicon.png'),
    //   // todo https://github.com/jantimon/html-webpack-plugin/issues/1081
    //   minify: true,
    // }),
    new MiniCssExtractPlugin({
      filename: assetsPath('css/[name].css'),
    }),
    // new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /\.css(\?.*)?$/,
      }),
      new TerserPlugin({
        sourceMap: true,
        cache: true,
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
});
