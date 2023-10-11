const path = require("path");
const { merge } = require('webpack-merge');
const config = require("./webpack.base")

module.exports = merge(config, { // cara 2 buat gabungin config
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.[contenthash].js', // caching
    clean: true // bersihin folder dist setiap generate baru.
  },
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