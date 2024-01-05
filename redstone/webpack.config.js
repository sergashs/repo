const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const glob = require('glob');

const PATHS = {
  src: path.resolve(__dirname, 'src'),
  dist: path.resolve(__dirname, 'dist'),
};

const views = glob.sync('./src/views/*.html');

module.exports = {
  entry: {
    index: PATHS.src + '/js/index.js',
  },
  output: {
    path: PATHS.dist,
    filename: 'scripts.min.js'
  },
  devServer: {
    port: 4000,
    watchFiles: ['src/**/*.html'],
    liveReload: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   title: 'Title',
    //   template: './src/views/index.html',
    //   filename: 'index.html',
    //   chunks: ['index'],
    //   minify: false,
    // }),


    ...views.map((view) => {
      const viewName = path.basename(view, '.html');
      return new HtmlWebpackPlugin({
        title: 'Blog',
        template: view,
        filename: `${viewName}.html`,
        chunks: ['index'],
        minify: false,
      });
    }),
    new MiniCssExtractPlugin({
      filename: 'styles/styles.min.css',
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: PATHS.src + '/images/',
          to: 'images',
          noErrorOnMissing: true
        },
        {
          from: PATHS.src + '/js/',
          to: 'js',
          noErrorOnMissing: true
        },
      ],
    }),


  ],
  module: {
    rules: [
      {
        test: /\.(sass|less|css)$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(png|svg|jpe?g|gif|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'images/[name].[ext]' },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },

    ],
  },
};
