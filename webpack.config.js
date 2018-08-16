const path = require("path")

const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/index.tsx", // entry point 
  devtool: "source-map", // Enable sourcemaps for debugging Webpack's output
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.join(__dirname, "/dist"),  // bundle output path 
    filename: "index_bundle.js"           // bundle name
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"  // Specify the HTML template to use
    })
  ]
}