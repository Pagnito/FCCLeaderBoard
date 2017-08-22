var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: ['whatwg-fetch','./src/index.js'],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "build/"
  },
  module: {
    rules: [
      {
        test: /\.css$|.scss$/,
        use: ExtractTextPlugin.extract({
           fallback: "style-loader",
           use:["css-loader",
                "sass-loader"
                ]
        })

      },
      {
        test: /\.js$|\.jsx$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env'],

          }
        },
        exclude:/node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
    filename: "bundle.css",
    disable: false,
    allChunks: true
  })
  ]
}
