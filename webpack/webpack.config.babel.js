import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
	cache: true,
	context: process.cwd(),
	devtool: 'source-map',
	devServer: {
		inline: true,
		port: 3333
	},
	resolve: {
		modules: [
			path.resolve('./node_modules')
		],
		extensions: ['.js']
	},
	entry: {
		main: [
			'babel-polyfill',
			'./src/js/main.js'
		]
	},
	output: {
		path: path.join(process.cwd(), 'build'),
		filename: '[name].js',
		sourceMapFilename: '[file].map'
	},
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				use: {
					loader: 'eslint-loader',
					options: {
						failOnError: false
					}
				},
				exclude: [/node_modules/]
			},
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
					loader: 'html-loader'
				}
			},
			{
				test: /\.ejs$/,
				loader: 'ejs-compiled-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new ExtractTextPlugin({
			filename: '[name].css'
		}),
		new webpack.LoaderOptionsPlugin({
			debug: true
		})
	]
};
