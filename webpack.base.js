
module.exports = {
    module: {
    rules: [
      {
        test: /\.js?$/,
        // webpack loader module
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          // rules used by babel to transpile the code
          presets: [
            // to transpile JSX
            "react",
            // to handle async code
            "stage-0",
            // env preset - run all  the transform rules needed to meet the requirements of latest two browsers
            ["env", { targets: { browsers: ["last 2 versions"] } }]
          ]
        }
      }
    ]
  }
}


