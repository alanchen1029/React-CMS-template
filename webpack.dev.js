const {merge} = require("webpack-merge");
const common = require("./webpack.config.js");
const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "..", "build"),
    filename: "bundle.js",
    assetModuleFilename: "assets/[hash][ext][query]",
    publicPath: "/",
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 5000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    // set proxy here
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000/",
    //     secure: false,
    //     changeOrigin: true,
    //   },
    // },
  },
  plugins: [
    new webpack.DefinePlugin({
      // define global variables here
      BASE_URL: JSON.stringify("/api/v1"),
      DOMAIN: JSON.stringify("http://localhost:8080"),
    }),
    new MiniCssExtractPlugin({
      filename: "main.css",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
});
