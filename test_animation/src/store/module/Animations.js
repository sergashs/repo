import AnimationsJSON from "@/constants/Animations"


export default {
    namespaced: true,

    state: {
        animations: AnimationsJSON,
        choosedAnimations: {
            1: [],
            2: [],
            3: [],
            4: [],
            5: [],
            6: [],
        },
    },

    getters: {
        animations: (state) => state.animations,
        choosedAnimations: (state) => state.choosedAnimations
    },

    mutations: {
        set_choosedAnimations(state, choosedAnimations) {
            state.choosedAnimations = choosedAnimations
        },
    },


    actions: {
        setAnimations({ commit }, params = {}) {
            commit('set_choosedAnimations', params);
        },
    }
};
