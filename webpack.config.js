const path = require("path");

module.exports = (env) => {
  let entryPath = env.mode === 'production'
    ? './public/index.js'
    : './src/index.js';

  return {
    entry: entryPath,
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "build"),
      clean: true,
    },
    module: {
      rules: [
        { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader'] },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },
      ]
    },
    devtool: 'cheap-eval-source-map',
  }
};