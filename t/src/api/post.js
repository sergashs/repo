// Api post
import API from '.';

const path = (path) => {
	return `/posts/${path ? path : ''}`
}

export default {
	getAllPosts: () => {
		return API.get(path());
	},
	getCommentsForOnePost: (id) => {
		return API.get(`${path()}${id}/comments`)
	}
}