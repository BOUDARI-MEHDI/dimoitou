const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const path = require("path");

/**
 * HACK for IE 11
 */
const ie11BabeLoader = {
  loader: "babel-loader",
  options: {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: "commonjs",
          targets: {
            browsers: "> 1%, IE 11, not dead",
          },
        },
      ],
    ],
  },
};

module.exports = (env) => {
  const environnementVariables = env
    ? Object.keys(env).reduce((envsObject, currentEnv) => {
        envsObject[`process.env.${currentEnv}`] = JSON.stringify(
          env[currentEnv]
        );
        return envsObject;
      }, {})
    : {};

  return {
    optimization: {
      minimize: true
    },
    entry: path.resolve(__dirname, "assets", "scripts", "main.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "./bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [ie11BabeLoader],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                implementation: require("node-sass"),
              },
            },
          ],
        },
        {
          test: /\.(png|jpg)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "images/",
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin([
        { from: "assets/index.html", to: "index.html" },
        { from: "assets/images", to: "images" },
        { from: "assets/styles", to: "styles" },
        { from: "assets/fonts", to: "fonts" },
      ]),
      new Dotenv({
        path: "./.env",
        silent: true,
      }),
      new webpack.DefinePlugin(environnementVariables),
    ],
    devServer: {
      contentBase: [path.join(__dirname, "dist")],
      compress: true,
      port: 9000,
      hot: true,
    },
  }
};
