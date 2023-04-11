import authApi from "@/api/auth";

export const auth = {
	namespaced: true,
	state: {
		token: null || process.client ? localStorage.getItem('token') : null
	},

	getters: {
		token: (state) => state.token,
	},

	mutations: {
		SET_TOKEN(state, token) {
			state.token = token
		},
		CLEAR_TOKEN(state) {
			state.token = null

			if (process.client) {
				localStorage.removeItem('token');
			}
		},
	},

	actions: {
		LOGIN({ commit }, payload) {
			return authApi.login(payload).then(({ data }) => {
				const token = data.data
				commit(SET_TOKEN, token)
				this.$cookie.set('token', token)
			})
		},
		LOGOUT({ commit }) {
			commit(CLEAR_TOKEN)
		},
	}
}