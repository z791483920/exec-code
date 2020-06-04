import path from "path";
import process from "process";
import webpack from "webpack";
import merge from "lodash/merge";

const SUPPORT_BROWSERS = [
  ">1%",
  "last 4 versions",
  "Firefox ESR",
  "Android 4.4",
  "ios 8",
  "not ie < 9", // React doesn't support IE8 anyway
];
const GLOBALS = {
  __DEV__: process.env.NODE_ENV === "development",
};

const isDev = process.env.NODE_ENV === "development";
const baseDir = process.cwd();
const outputPath = "dist";
const babelLoaderConfig = {
  loader: "babel-loader",
  options: {
    babelrc: false,
    cacheDirectory: ".tmp/babel-loader",
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "usage",
          corejs: 3,
          targets: { browsers: SUPPORT_BROWSERS},
        },
      ],
    ],
    plugins: [
    ],
  },
};

const tsLoaderConfig = {
  loader: "ts-loader",
  options: {
    happyPackMode: true,
  },
};

const entries = { index: path.resolve(baseDir, "components/index.tsx") };
export default {
  target: "web",
  context: baseDir,
  entry: entries,
  output: {
    path: path.join(baseDir, outputPath),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js",
    libraryTarget: 'commonjs2',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)?$/,
        exclude: [/node_modules/],
        oneOf: [
          {
            use: [babelLoaderConfig, tsLoaderConfig],
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".tsx", ".js", ".ts", ".json"],
  },
};
