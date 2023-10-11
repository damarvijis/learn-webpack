const path = require("path");
const { merge } = require('webpack-merge');
const config = require("./webpack.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(config, {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
    liveReload: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "img/[name][ext]",
    filename: '[name].js'
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  devtool: false
});

// module.exports = {
//   extends: path.resolve(__dirname, './webpack.base.js'),
//   mode: 'development',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'main.js'
//   },
//   watch: true,
//   devtool: false
// };