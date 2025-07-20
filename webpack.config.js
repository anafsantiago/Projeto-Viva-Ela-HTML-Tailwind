const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './js/script.js',
    'main-accordion': './js/script-accordion.js',
    'main-tabnav': './js/script-tabnav.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './'),
    clean: false // Deixa falso para não apagar seus HTMLs por engano
  },
  watch: process.env.WATCH === 'true',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ],
  },
};
