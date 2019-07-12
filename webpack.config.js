const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

const htmlPath = path.resolve('./public/index.html');

const webpackConfiguration = {
  devtool: 'cheap-module-source-map',
  entry: ['./src/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: ['./node_modules'],
    extensions: ['.js'],
  },
  output: {
    pathinfo: true,
    path: path.resolve(__dirname, 'build/'),
    publicPath: '',
    filename: 'js/bundle.js',
    chunkFilename: 'js/[name].chunk.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
  },
  plugins: [
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: '',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: htmlPath,
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  webpackConfiguration.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfiguration;
