export const state = () => {
	return {
		breakpoint: null
	};
};

export const mutations = {
	setBreakpoint(state) {
		const width = window.innerWidth;

		if (width > 0) {
			state.breakpoint = "xs";

		}
		if (width > 576) {
			state.breakpoint = "sm";

		}
		if (width > 768) {
			state.breakpoint = "md";

		}
		if (width > 992) {
			state.breakpoint = "lg";

		}
		if (width > 1200) {
			state.breakpoint = "xl";

		}
		if (width > 1400) {
			state.breakpoint = "xxl";

		}


	},
};

export const getters = {
	xxl(state) {
		return state.breakpoint === "xxl";
	},
	xl(state) {
		return state.breakpoint === "xl";
	},
	lg(state) {
		return state.breakpoint === "lg";
	},
	md(state) {
		return state.breakpoint === "md";
	},
	sm(state) {
		return state.breakpoint === "sm";
	},
	xs(state) {
		return state.breakpoint === "sm";
	}
};
