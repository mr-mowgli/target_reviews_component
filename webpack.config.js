const path = require('path');

module.exports = {
  entry: "./Client/App.jsx",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'Public'),
  },
  mode: 'development',
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}

