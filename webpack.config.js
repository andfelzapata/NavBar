const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

const devMode = process.env.NODE_ENV !== "production"

module.exports = {
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "client"),
    index: "index.html",
    overlay: {
      warnings: true,
      errors: true
    }
  },
  entry: { main: "./src/index.js" },
  output: {
    path: path.resolve(__dirname, "client"),
    filename: "[name].js"
  },
  optimization: {
    namedChunks: true,
    minimizer: [new UglifyJsPlugin({}), new OptimizeCSSAssetsPlugin({})]
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: ["node_modules"],
    alias: {
      src: path.resolve(__dirname, "src"),
      mockData: path.resolve(__dirname, "src/mockData"),
      Pages: path.resolve(__dirname, "src/Components/Pages"),
      Components: path.resolve(__dirname, "src/Components"),
      utils: path.resolve(__dirname, "src/utils"),
      reducers: path.resolve(__dirname, "src/reducers"),
      selectors: path.resolve(__dirname, "src/selectors"),
      img: path.resolve(__dirname, "src/img"),
      styles: path.resolve(__dirname, "src/styles")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[name].css" : "[name].[hash].css"
    }),
    new CopyWebpackPlugin([{ from: "./src/mockData/", to: "api" }]),
    devMode ? () => null : new CleanWebpackPlugin("client")
  ]
}
