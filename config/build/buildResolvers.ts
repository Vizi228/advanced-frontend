import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildResolvers({ paths }: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  };
}
