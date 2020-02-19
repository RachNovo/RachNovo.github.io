const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public/"),
    filename: "bundle.js"
  }
};