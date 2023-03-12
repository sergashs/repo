// Api post
import API from '.';

const path = (id) => {
	return `/api/posts/${id}/comments`
}

export default {
	create: (params = {}) => {
		return API.post(path(params.id), params)
	},
	getAllForPost: (id) => {
		return API.get(path(id))
	},
}