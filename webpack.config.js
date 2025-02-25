import historyApiFallback from 'connect-history-api-fallback';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import browserifyZlib from 'browserify-zlib';
import asyncHooks from 'async_hooks';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

export default {
  mode: 'development',
  entry: {
    index: './src/index.js', // Main entry point for index.html
    ink: './src/ink.js', // Entry point for page2.html
    misc: './src/misc.js', // Entry point for page3.html
    paper: './src/paper.js', // Entry point for page4.html
  },
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: '[name].bundle.js',
  },
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), 'dist'),
    },
    port: 3001,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all', // Split all chunks (including vendor and app code)
    },
    minimize: true, // Ensure minification in production mode
  },
  resolve: {
    fallback: {
      vm: 'vm-browserify', // Polyfill for vm module
      path: 'path-browserify', // Polyfill for path module
      stream: 'stream-browserify', // Polyfill for stream module
      crypto: 'crypto-browserify', // Polyfill for crypto module
      url: 'url/', // Polyfill for url module
      querystring: 'querystring-es3', // Polyfill for querystring module
      buffer: 'buffer/', // Polyfill for buffer module
      fs: false, // fs is typically not needed in the browser
      http: 'stream-http', // Polyfill for http module
      net: false, // Not needed for frontend
      zlib: 'browserify-zlib', // Correct polyfill for zlib
      async_hooks: false, // Set to false if async_hooks is not needed
      assert: 'assert/',
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new BundleAnalyzerPlugin({
      openAnalyzer: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Template for index.html
      filename: 'index.html', // Output file in dist
      chunks: ['index'], // Only include the index.js bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/ink.html', // Template for page2.html
      filename: 'ink.html', // Output file in dist
      chunks: ['ink'], // Only include the page2.js bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/misc.html', // Template for page3.html
      filename: 'misc.html', // Output file in dist
      chunks: ['misc'], // Only include the page3.js bundle
    }),
    new HtmlWebpackPlugin({
      template: './src/paper.html', // Template for page4.html
      filename: 'paper.html', // Output file in dist
      chunks: ['paper'], // Only include the page4.js bundle
    }),
    new CompressionPlugin({
      test: /\.(js|css)$/, // Compress JS and CSS files
      threshold: 8192, // Only files bigger than 8KB are compressed
    }),
  ],
  stats: 'errors-warnings',
};
