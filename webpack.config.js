const path = require('path');
const Dotenv = require('dotenv-webpack');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // watch: true,
  mode: 'development', // 'production', //'development',//
  entry: [
    './src/js/index.js',
  ],
  output: {
    filename: 'js/script.js',
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
        // loader: 'html-loader'
        use: {
          loader: 'html-loader',
          options: {
            // conservativeCollapse: false,
            // minimize            : true,
            attrs: ['link:href', 'link:type'],
          },
        },
      },
      {
        test: /\.jade$/,
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]', // [folder]/
              outputPath: 'images',
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
    // new CleanWebpackPlugin(),
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.jade',
    }),
    // new PreloadWebpackPlugin(),
    autoprefixer,
  ],
  devServer: {
    // contentBase: [path.join(__dirname, 'dist'), path.join(__dirname, 'src')]
    contentBase: './dist',
    watchContentBase: true,
    port: 9001,
  },
};
