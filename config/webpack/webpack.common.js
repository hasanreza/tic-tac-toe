const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "../../src/index.jsx"),
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./src/index.html",
    }),
  ],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../../public"),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.(js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    extensions: [".jsx", ".js"],
  },
};
