const path = require('path');
const paths = require('./paths');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  /**
   * Entry
   *
   * The first place Webpack looks to start building the bundle.
   */
  entry: [
    path.resolve(__dirname, '../src/index.js'),
  ],
  // G:\rsschool\step\Shag\src/index.html
  /**
   * Output
   *
   * Where Webpack outputs the assets and bundles.
   */
  output: {
    path: paths.build,
    // filename: '[name].bundle.js',
    filename: 'index.js',
    publicPath: './',
  },

  /**
   * Plugins
   *
   * Customize the Webpack build process.
   */
  plugins: [
    /**
     * CleanWebpackPlugin
     *
     * Removes/cleans build folders and unused assets when rebuilding.
     */
    new CleanWebpackPlugin(),

    /**
     * CopyWebpackPlugin
     *
     * Copies files from target to destination folder.
     */
    new CopyWebpackPlugin([
      {
        from: paths.static,
        to: 'assets',
        ignore: ['*.DS_Store'],
      },
    ]),

    /**
     * HtmlWebpackPlugin
     *
     * Generates an HTML file from a template.
     */
    new HtmlWebpackPlugin({
      // title: 'Webpack Boilerplate',
      // favicon: paths.static + '/favicon.png',
      template: './src/index.html', // template file
      filename: 'index.html', // output file
    }),
    new HtmlWebpackPlugin({
      // title: 'Webpack Boilerplate',
      // favicon: paths.static + '/favicon.png',
      template: './src/about.html', // template file
      filename: 'about.html', // output file
    }),
    new HtmlWebpackPlugin({
      // title: 'Webpack Boilerplate',
      // favicon: paths.static + '/favicon.png',
      template: './src/event.html', // template file
      filename: 'event.html', // output file
    }),
    new HtmlWebpackPlugin({
      // title: 'Webpack Boilerplate',
      // favicon: paths.static + '/favicon.png',
      template: './src/contacts.html', // template file
      filename: 'contacts.html', // output file
    }),
  ],

  /**
   * Module
   *
   * Determine how modules within the project are treated.
   */
  module: {
    rules: [
      /**
       * JavaScript
       *
       * Use Babel to transpile JavaScript files.
       */
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'], //, 'eslint-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      /**
       * Styles
       *
       * Inject CSS into the head with source maps.
       */
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },

      /**
       * Images
       *
       * Copy image files to build folder.
       */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },

      /**
       * Fonts
       *
       * Inline font files.
       */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src', // prevent display of src/ in filename
        },
      },
    ],
  },
}
