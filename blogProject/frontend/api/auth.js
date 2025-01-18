// Api post
import API from '.';


export default {
	register: (params) => {
		return API.post('/api/register', params)
	},
	login: (params) => {
		return API.post('/api/login', params);
	},
}