import process from "process";
import webpack from "webpack";
import WebpackBar from "webpackbar";
import WebpackConfig from "./webpack_prod_config";

const config = WebpackConfig;

const compiler = webpack(config);

// if (process.env.NODE_ENV === "development") {
//   // new webpack.ProgressPlugin().apply(compiler);

// }

new WebpackBar({
  profile: true,
}).apply(compiler);

compiler.run((err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    process.exit(1);
  }

  console.log(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    })
  );

  if (stats.hasErrors()) {
    process.exit(1);
  }
});
