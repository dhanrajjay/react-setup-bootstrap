const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = (env, args) => {	
	const config = {
		// used to know which file caused the error, in the minified compressed files.
		devtool: (args.mode === 'development') ? 'inline-source-map' : false, 
		// To place the output in build directory
		entry: {
		   app: env.entryPoint
		},
		output: {
			filename: env.outputFile,
			path: __dirname + env.outputPath,
			publicPath: '/'
		},
		module: {
			rules: [
			  // js & jsx minification
			  {
				test: /\.(js|jsx)$/,
			    exclude: /node_modules/,
			    use: {
			    	loader: "babel-loader"
			    }
			  }			  
			]
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						test: /[\\/]node_modules[\\/]/,
						name: 'vendors',
						chunks: 'all'
					}
				}
			}
		},	
		plugins: [
			new HtmlWebPackPlugin({			
				filename: "index.html"
			})
		]	
	}

	return config;
};