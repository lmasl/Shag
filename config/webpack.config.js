const path = require('path');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // 'production', //'development',
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'script.js',
    publicPath: './',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimizer: [
      new TerserPlugin(),
    ],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src/js'),
        use: [
          // {
          // loader : 'babel-loader',
          // options: {
          //     presets: ['@babel/preset-env']
          // },
          {
            loader: 'eslint-loader',
            options: {
              // cache: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          // 'raw-loader',
          'pug-html-loader',
        ],

      },
      {
        test: /\.css$/,
        // exclude: /slick/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              autoprefixer: {
                browsers: ['last 2 versions'],
              },
            },
          },
          // 'resolve-url-loader',
          'sass-loader',
          // 'resolve-url'
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // [folder]/
              outputPath: 'img',
              esModule: false,
              useRelativePath: true,

            },
          },
        ],
      },
      {
        test: /\.(mp3)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[folder]/[name].[ext]',
              outputPath: 'media',
              esModule: false,
              // useRelativePath: true,
            },
          },
        ],
      },
      {
        test: /\.(ttf|otf|webp|eot|woff|woff2)$/i, //
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'styles/main.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    // new PreloadWebpackPlugin(),
    autoprefixer,
  ],
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    open: true,
    hot: true,
    port: 8080,
  },
};
