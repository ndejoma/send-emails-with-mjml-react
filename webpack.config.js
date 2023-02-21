/** @format */
const path = require('node:path');
const fs = require('node:fs');
const Dotenv = require('dotenv-webpack');
const nodemonWebpackPlugin = require('nodemon-webpack-plugin');
const { dependencies } = require('./package.json');

// const nodeModulesOld = fs
//     .readdirSync('node_modules')
//     .filter(x => {
//         //returns an array without a .bin folder, .pnpm folder and the .modules.yaml file
//         //That is file or folder starting with a period(.) is not returned in the array
//         return !x.startsWith('.');
//     })
//     .reduce((prev, curr) => {
//         //these modules will be excluded from the output bundle and required at runtime
//         //using commonjs require statement eg require('react')
//         //in this format {moduleName: 'commonjs moduleName'}
//         return { ...prev, [curr]: `commonjs ${curr}` };
//     });

//new solution using the package.json
//This is faster than the above solution we don't have to read the node_modules folder
const nodeModules = Object.keys(dependencies).reduce((prev, curr) => {
	return {
		...prev,
		[curr]: `commonjs ${curr}`,
	};
}, {});

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js',
	},
	target: 'node',
	plugins: [
		new Dotenv({
			path:
				process.env.NODE_ENV === 'production'
					? '.env.production.local'
					: '.env.development.local',
		}),
		new nodemonWebpackPlugin({
			script: './build/bundle.js',
			watch: path.resolve('./build'),
			delay: 2500,
		}),
	],
	mode: process.env.NODE_ENV,
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	//this prevents bundling of dependencies under the node_modules folder eg express
	//instead the modules will be required at runtime on the server
	//we will only bundle our application code
	externals: nodeModules,
};
