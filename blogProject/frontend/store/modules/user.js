import ApiUsers from "@/api/users";


export const user = {
	namespaced: true,
	state: {
		user: {}
	},

	getters: {
		user: (state) => state.user,
	},

	mutations: {
		SET_USER(state, user) {
			state.user = user
		},
	},

	actions: {
		getUser({ commit }, params) {
			return ApiUsers.getSelfUser(params).then(response => {

				if (response.username) {
					commit('SET_USER', response);
					// console.log(response)
					return response;
				}
			}).catch((error) => {
				console.log(error);
				return error;
			})
		},
		logout({ commit }) {
			commit('SET_USER', {});
			localStorage.removeItem('token');
		}

	}
}