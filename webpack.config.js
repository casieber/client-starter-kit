const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const isDevMode = process.env.NODE_ENV === 'development';

const config = {
	mode: isDevMode ? 'development' : 'production',
	entry: {
		app: './src/index.tsx'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				enforce: 'pre',
				use: 'tslint-loader'
			},
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
		plugins: [
			new TsConfigPathsPlugin()
		]
	},
	plugins: [
		new CleanWebpackPlugin('dist', {}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	devtool: 'source-map',
};

if (isDevMode) {
	// Add development specific config options here
	config.serve = {
		port: 3000,
	}
}

module.exports = config;