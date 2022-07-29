module.exports = {
	plugins: [
		{
			plugin: require('craco-plugin-scoped-css')
		}
	],
	style: {
		sass: {
			loaderOptions: {
				additionalData: `
			  @import "src/styles/_vars.scss";
			`,
			},
		},
	},
}