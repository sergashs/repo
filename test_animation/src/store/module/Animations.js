import AnimationsJSON from "@/constants/Animations"


export default {
    namespaced: true,

    state: {
        animations: AnimationsJSON
    },

    getters: {
        animations: (state) => state.animations,

    },

    mutations: {
        // set_history: (state, payload) => {
        //     state.history = payload;
        // },

    },
};
