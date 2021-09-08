const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  const entryPath =
    env.mode === 'production' ? './public/index.js' : './src/index.js';

  return {
    entry: ['@babel/polyfill', entryPath],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    devtool: 'cheap-eval-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CleanWebpackPlugin()
    ]
  };
};
