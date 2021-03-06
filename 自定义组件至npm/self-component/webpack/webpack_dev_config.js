import path from "path";
import webpack from "webpack";
import cloneDeep from "lodash/cloneDeep";
import webpackMerge from "webpack-merge";
import webpackBaseConfig from "./webpack_base_config";
import HtmlWebpackPlugin from "html-webpack-plugin";

const port = process.env.PORT || 5000;

const baseConfig = cloneDeep(webpackBaseConfig);
export default webpackMerge.smart(baseConfig, {
  mode: "development",
  devtool: "source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "src/view/index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    port,
    progress: true,
    hot: true,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    },
  },
});
