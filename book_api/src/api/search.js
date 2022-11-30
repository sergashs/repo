import API from '@/api';
export default {
	searchByTitle: (value = {}) => {
		return API.get(`search.json?q=${value}`, {
			value
		});
	},
};
