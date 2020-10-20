const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js', //'@babel/polyfill',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'config/postcss.config.js' } },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true },
          }, {
            loader: 'postcss-loader',
            options: { sourceMap: true, config: { path: 'config/postcss.config.js' } },
          }, {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(ttf|otf|webp|eot|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title : 'Hello',
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      title : 'about.html',
      filename: 'about.html',
      template: './src/about.html',
    }),
    new HtmlWebpackPlugin({
      title : 'event.html',
      filename: 'event.html',
      template: './src/event.html',
    }),
    new HtmlWebpackPlugin({
      title : 'contacts.html',
      filename: 'contacts.html',
      template: './src/contacts.html',
    }),
    new HtmlWebpackPlugin({
      title : 'firstmodal.html',
      filename: 'firstmodal.html',
      template: './src/firstmodal.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',

    }),
    new CopyWebpackPlugin([
      { from: './src/images/', to: './images/' },
    ]),
  ],
  resolve: {
    extensions: ['.js'],
  },
};
