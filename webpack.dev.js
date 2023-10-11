const path = require("path");
const { merge } = require('webpack-merge');
const config = require("./webpack.base")

module.exports = merge(config, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  watch: true,
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