// Api post
import API from '.';

const path = (path) => {
	return `/api/posts/${path ? path : ''}`
}

export default {
	create: (params = {}) => {
		return API.post(path(), params)
	},
	getAll: () => {
		return API.get(path());
	},
	getOne: (id) => {
		return API.get(path(id))
	},
	update: (params = {}) => {
		return API.put(path(params.id), params)
	},
	delete: (id) => {
		return API.delete(path(id));
	},
}