import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
  devtool: 'source-map',
  target: 'node',
  context: __dirname,
  resolve: {
    extensions: ['.js', '.ejs']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader'
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.ejs$/,
        loader: 'html-loader' // ejs loader doesn't work with mocha
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      ENV_MOCHA: true
    }),
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
};
