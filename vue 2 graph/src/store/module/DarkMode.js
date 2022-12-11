export default {
    namespaced: true,

    state: {
        history: {},
        dayList: [],
    },

    getters: {
        history: (state) => state.history,
        dayList: (state) => state.dayList,
    },

    mutations: {
        set_history: (state, payload) => {
            state.history = payload;
        },
        set_dayList: (state, payload) => {
            state.dayList = payload;
        },
    },
};
