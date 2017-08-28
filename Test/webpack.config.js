var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

  module.exports = {
    // Точка входа в приложение
    entry: {
      'polyfills': './UrlApp/polyfills.ts',
      'vendor': './UrlApp/vendor.ts',
      'app': './UrlApp/main.ts'
    },

    // Выходной файл
    output: {
      path: path.resolve('dist'),
      publicPath: '/',
      filename: '[name].[hash].js'
    },
   
    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [{
            loader: 'awesome-typescript-loader',
            options: { configFileName: path.resolve('tsconfig.json') }
          }, 'angular2-template-loader']
        },
        {
          test: /\.html$/,
          loader: 'html-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
          loader: 'file-loader?name=assets/[name].[hash].[ext]'
        },
        {
          test: /\.css$/,
          exclude: path.resolve('UrlApp', 'app'),
          loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader?sourceMap' })
        },
        {
          test: /\.css$/,
          include: path.resolve('UrlApp', 'app'),
          loader: 'raw-loader'
        }]
    },

    plugins: [
      new webpack.ContextReplacementPlugin(
        /angular(\|\/)core(\|\/)(esm(\|\/)src|src)(\|\/)linker/,
        path.resolve('./UrlApp'), // каталог с исходными файлами
        {} // карта маршрутов
      ),

      new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      }),

      //new HtmlWebpackPlugin({
      //  template: 'src/index.html'
      //}),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.NoEmitOnErrorsPlugin(),

      new webpack.optimize.UglifyJsPlugin({
        mangle: {
          keep_fnames: true
        }
      }),

      new webpack.LoaderOptionsPlugin({
        htmlLoader: {
          minimize: false
        }
      })
    ]
  };