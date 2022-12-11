import API from '@/api';

export default {
	getTest: (params) => {
		return API.post(null, {
			query: params
		});
	},

};