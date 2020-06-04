import path from "path";
import process from "process";
import webpack from "webpack";
import merge from "lodash/merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import postcssPresetEnv from "postcss-preset-env";

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
          // modules: 'commonjs',
          useBuiltIns: "usage",
          corejs: 3,
          targets: { browsers: SUPPORT_BROWSERS },
        },
      ],
      "@babel/preset-react",
    ],
    plugins: [
      // "@babel/plugin-transform-typescript",
      // "@babel/plugin-transform-modules-commonjs",
      // "@babel/plugin-syntax-dynamic-import",
      // "@babel/plugin-syntax-import-meta",
      // "@babel/plugin-transform-runtime",
      // ["@babel/plugin-proposal-decorators", { legacy: true }],
      // ["@babel/plugin-proposal-class-properties", { loose: true }],
      // ["@babel/plugin-proposal-optional-chaining", { loose: true }],
    ],
  },
};

const tsLoaderConfig = {
  loader: "ts-loader",
  options: {
    happyPackMode: true,
  },
};

const entries = isDev
  ? { index: path.resolve(baseDir, "example/index.tsx") }
  : { index: path.resolve(baseDir, "components/index.tsx") };
export default {
  target: "web",
  context: baseDir,
  entry: entries,
  output: {
    path: path.join(baseDir, outputPath),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[name].js",
    libraryTarget: 'umd',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        // vendor: {
        //   chunks: "initial",
        //   name: "vendor",
        //   enforce: true,
        // },
        // commons: {
        //   chunks: "initial",
        //   // test: (m) => vendors.indexOf(m.rawRequest) === -1,
        //   minChunks: 3,
        //   name: "commons",
        //   reuseExistingChunk: true,
        // },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin(GLOBALS),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css",
    }),
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
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
              modules: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDev,
              plugins: () => [
                postcssPresetEnv({ stage: 0, browsers: SUPPORT_BROWSERS }),
              ],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: isDev,
              modules: false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: isDev,
              plugins: () => [
                postcssPresetEnv({ stage: 0, browsers: SUPPORT_BROWSERS }),
              ],
            },
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?(#\S*)?$/,
        exclude: /node_modules/,
        loader: "file-loader",
        options: { name: "assets/fonts/[name].[ext]" },
      },
      {
        test: /\.(png|jp(e)?g|gif)$/,
        exclude: /node_modules\/(?!(pdfjs-dist)\/).*/,
        loader: "file-loader",
        options: { name: "assets/images/[name].[ext]" },
      },
    ],
  },
  resolve: {
    extensions: [".jsx", ".tsx", ".js", ".json"],
  },
};
