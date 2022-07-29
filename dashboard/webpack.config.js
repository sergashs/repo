

module.exports = {

	loader: 'sass-resources-loader',
	options: {
		resources: [
			path.resolve(__dirname, './src/styles/_vars.scss')
		],
	}

}