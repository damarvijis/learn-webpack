const path = require("path");
const { merge } = require('webpack-merge');
const config = require("./webpack.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, { // cara 2 buat gabungin config
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // caching
    assetModuleFilename: "img/[name]-[hash][ext]", // hash buat caching
    clean: true // bersihin folder dist setiap generate baru.
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css"
    })
  ]
});
// module.exports = { cara 1 buat gabungin config
//   extends: path.resolve(__dirname, './webpack.base.js'),
//   mode: 'production',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.[contenthash].js',
//     clean: true // bersihin folder dist setiap generate baru.
//   },
// };