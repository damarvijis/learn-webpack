const path = require("path");
const glob = require("glob");
const { merge } = require('webpack-merge');
const config = require("./webpack.base")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin"); // minify css (yg kepake doang)
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin"); // minify image

const PATHS = {
  src: path.join(__dirname, "src"),
};

module.exports = merge(config, { // cara 2 buat gabungin config
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js', // caching
    assetModuleFilename: "img/[name]-[hash][ext]", // hash buat caching
    clean: true // bersihin folder dist setiap generate baru.
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.[contenthash].css"
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
    }),
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