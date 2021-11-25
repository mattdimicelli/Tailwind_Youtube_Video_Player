const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',  //Injects the CSS into the DOM
          {
            loader: 'css-loader',  // Reads CSS from CSS files, ensures that imports & exports are parsed correctly
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
    ]
  }, 
  devServer: {
    static: [
      // {
      //   directory: path.join(__dirname, 'images'),
      //   publicPath: '/images',
      // },
      {
        directory: path.join(__dirname, 'dist'),
      }
    ],
    open: true,
  }
};

module.exports = config;