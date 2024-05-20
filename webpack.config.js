const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  // Entry point of the application
  entry: './src/index.js',

  // Output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true, // Clean the output directory before emit
  },

  // Loaders and rules
  module: {
    rules: [
      // JS: Use babel-loader to process JS files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      // CSS: Use MiniCssExtractPlugin.loader and css-loader to process CSS files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  // Plugins
  plugins: [
    // HtmlWebpackPlugin to generate the output HTML file from the template
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],

  // Development server configuration (optional, if you decide to use webpack-dev-server)
  devServer: {
    static: './dist',
    open: true,
  },

  // Mode
  // Set to 'development' or 'production' depending on your needs
  mode: 'development',
};