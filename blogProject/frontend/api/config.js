const config = function () {
	return {
		// baseURL: process.env.VUE_APP_API_URL,
		baseURL: 'http://localhost:5000',
		headers: {
			Accept: 'application/json',
		},
	};
};

export default config;
