const path = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: {
    main: "./js/script.js",
    "main-accordion": "./js/script-accordion.js",
    "main-tabnav": "./js/script-tabnav.js",
    "main-slide": "./js/script-slide.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./"),
    clean: false,
  },
  watch: process.env.WATCH === "true",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
