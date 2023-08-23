const config = function () {
	return {
		// baseURL: process.env.VUE_APP_API_URL,
		baseURL: 'https://jsonplaceholder.typicode.com',
		headers: {
			Accept: 'application/json',
		},
	};
};

export default config;
