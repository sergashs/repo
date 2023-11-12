module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: [
		"eslint:recommended",
		"plugin:nuxt/recommended",
		"plugin:vue/vue3-recommended",
		"@vue/eslint-config-airbnb",
	],
	plugins: [
		'vue',
	],
	rules: {
	},
};