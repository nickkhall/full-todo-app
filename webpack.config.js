module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    publicPath: 'services/templates',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: { presets: [ 'react', 'es2015' ] }
      },
      {
        test: /\.scss|sass$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devServer: {
    proxy: {
      '*': "127.0.0.1:3030"
    },
    host: "127.0.0.1"
  }
};
