// Api post
import API from '.';

const path = (path) => {
	return `/api/posts/${path ? path : ''}`
}

export default {
	getAllPosts: () => {
		return API.get(path());
	},
	deletePost: (id) => {
		return API.delete(path(id));
	}

}