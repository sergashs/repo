// Api post
import API from '.';

export default {
	getSelfUser: (params) => {
		return API.get('/api/users', params)
	},
}