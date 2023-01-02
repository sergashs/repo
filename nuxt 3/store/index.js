const state = () => ({
	cart_quantity: null,
});

const actions = {
	setCartQuantity({ commit }, params) {
		return params;
	},
};

const mutations = {
	SET_CART_QUANTITY(state, quantity) {
		state.cart_quantity = quantity;
	},
};

const getters = {
	cartQuantity(state) {
		return state.cart_quantity;
	},
};