// Api post
import API from '.';

const path = (path) => {
	return `/comments/${path ? path : ''}`
}

export default {
	getAllComments: () => {
		return API.get(path())
	},
}