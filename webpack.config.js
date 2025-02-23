import historyApiFallback from 'connect-history-api-fallback';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

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
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: false,
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
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Template for index.html
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
  ],
  stats: 'errors-warnings',
};
