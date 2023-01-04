// Api post
import API from '.';



export default {
	getAllPosts: () => {
		return API.get('/posts/');
	},
	// getCommentsForOnePost: (params) => {
	// 	return API.get(path(`${params.id}/comments`));
	// },
	getCommentsForOnePost: (id) => {
		return API.get(`/posts/${id}/comments`)
	}
}