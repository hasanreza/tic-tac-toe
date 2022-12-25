const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../../src/index.tsx')
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../../public'),
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg|jpg|png|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[name][ext]'
        }
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js']
  }
};
