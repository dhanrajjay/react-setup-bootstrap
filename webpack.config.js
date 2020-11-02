const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, args) => {
    var hostUrl='';
    var setupAPI = function() {
        switch(process.env.API_ENV) {
            case 'production':
                hostUrl = {
                   image: 'https://production',
                   host: 'https://production'
                };
                break;
            case 'qa':
                hostUrl = {
                   image: 'https://api.github.com',
                   host: 'https://api.github.com'
                };
                break;
            case 'preprod':
                hostUrl = {
                   image: 'https://preprod',
                   host: 'https://preprod'
                };
                break;
            case 'development':
            default:
                hostUrl = {
                   image: 'https://www.allstate.com/resources/Allstate/images/hmpg/allstate-logo.png?v=93845497-a7d5-b016-8640-91bac7e36392',
                   host: 'https://localhost:9000'
                };
                break;
        }
    }

    setupAPI();
	const config = {
		// used to know which file caused the error, in the minified compressed files.
		devtool: (args.mode === 'development') ? 'inline-source-map' : '', 
		// To place the output in build directory
		output: {
			filename: "bundle.js",
			path: __dirname + "/dist",
			publicPath: ''
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
			  },
			  // html minifica
			  {
			    test: /\.html$/,
			    use: {
			    	loader: "html-loader"
			    }		    
			  },
			  // css minification
			  {
			  	test: /\.(s*)css$/,
			  	use: [{
		            loader: MiniCssExtractPlugin.loader, 	            
		          },
		          'css-loader',
		        ],
			  },
			  {
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader',
				],
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
		devServer: {
		   historyApiFallback: true,
		},
		plugins: [
			new HtmlWebPackPlugin({
				template: "./src/index.html",
				filename: "./index.html"
			}),
			new MiniCssExtractPlugin("style.css"),
			new MinifyPlugin(),
			new webpack.DefinePlugin({
              '__API_HOST__': JSON.stringify(hostUrl)
            })
		],
		devServer: {
            port: 9000
        }
	}

	return config;
};