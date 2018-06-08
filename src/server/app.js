const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const webpackHotServerMiddleware = require("webpack-hot-server-middleware");
const webpackConfig = require("../../webpack");
const serverRenderer = require("../../public/serverRenderer").default;

const app = express();

if (process.env.NODE_ENV === "development") {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler));
  app.use(
    webpackHotMiddleware(compiler.compilers.find(c => c.name === "client"))
  );
  app.use(webpackHotServerMiddleware(compiler));
} else {
  app.use(express.static("public"));
  app.use(serverRenderer());
}

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
