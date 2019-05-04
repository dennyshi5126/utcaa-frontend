const webpack = require("webpack");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
});

module.exports = {
  mode: "development",
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:3000",
    "webpack/hot/only-dev-server",
    "./app/app.js"
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      pages: path.join(__dirname, "app/pages"),
      actions: path.join(__dirname, "app/actions"),
      config: path.join(__dirname, "app/config"),
      reducers: path.join(__dirname, "app/reducers"),
      stylesheets: path.join(__dirname, "app/stylesheets"),
      utils: path.join(__dirname, "app/utils")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx|\.js?$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        include: /app/,
        loader: "style-loader!css-loader?outputStyle=expanded"
      },
      {
        test: /\.scss$/,
        include: /app/,
        loader: "style-loader!css-loader!sass-loader?outputStyle=expanded"
      },
      {
        test: /\.(jpg|png|gif|eot|woff|ttf|svg)/,
        loader: "file-loader"
      }
    ]
  },
  devServer: {
    inline: true,
    contentBase: [path.join(__dirname, "app"), path.join(__dirname, "build")]
  },
  plugins: [
    new MiniCssExtractPlugin("[name].css"),
    devFlagPlugin,
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
