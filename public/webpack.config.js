const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    main: [
      `${path.resolve(__dirname, './page/src/js/index.js')}`,
      `${path.resolve(__dirname, './page/src/scss/index.scss')}`,
    ],
  },
  mode: 'production',
  watch: false,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'postcss-loader', options: { sourceMap: true } },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      {
        test: /\.(woff|woff2|ttf|png|jpg|webp)$/,
        type: 'asset/resource',
      }
    ],
  },

  output: {
    path: path.resolve(__dirname, './page/web/static'),
    filename: 'main.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.mode = 'development';
    config.watch = true;
  }
  return config;
};
