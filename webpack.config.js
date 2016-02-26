var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?presets[]=react,presets[]=es2015'],
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style!css" }
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
