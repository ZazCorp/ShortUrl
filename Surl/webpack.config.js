"use strict"
{
  // Требуется для формирования полного output пути
  let path = require('path');

  // Плагин для очистки выходной папки (bundle) перед созданием новой
  const CleanWebpackPlugin = require('clean-webpack-plugin');

  // Путь к выходной папке
  const bundleFolder = "wwwroot/myapp/";

  module.exports = {
    // Точка входа в приложение
    entry: "./UrlApp/main.ts",

    // Выходной файл
    output: {
      filename: 'script.js',
      path: path.resolve(__dirname, bundleFolder)
    },
    plugins: [
        new CleanWebpackPlugin([bundleFolder])
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          exclude: /node_modules/,
        },
      ]
    },
  };
}