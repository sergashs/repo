

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
		getSelfUser({ commit }, params) {
			return ApiAccount.getSelfUser(params).then(response => {
				commit('SET_USER', response);

				return response

			}).catch((error) => {
				//console.log(error);
				return error
			})
		},
	}
}