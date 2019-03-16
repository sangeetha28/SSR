const path = require("path");
const merge = require("webpack-merge");
const base = require("./webpack.base");

const config = {
  // Inform webpack that we are building bundle for nodeJS, rather than for the browser
  target: "node",

  // tell webpack the rootfile of our application

  entry: "./src/server/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  }
};

module.exports = merge(base, config);
