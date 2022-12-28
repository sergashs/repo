import API from '@/api';
export default {
	searchByTitle: (value = {}) => {
		return API.get(`/books/v1/volumes?q=${value}`, {
			value
		});
	},
};
