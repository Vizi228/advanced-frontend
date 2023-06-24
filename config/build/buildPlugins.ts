import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, apiUrl }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API_URL__: JSON.stringify(apiUrl),
    }),
    new ReactRefreshPlugin(),
  ];

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }));
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
}
