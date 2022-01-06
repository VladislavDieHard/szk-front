export default {
    state: {
        isCollapse: window.innerWidth < 1200
    },
    getters: {
        getCollapse: (state) => {
            return state.isCollapse;
        }
    },
    mutations: {
        SET_COLLAPSE: (state) => {
            state.isCollapse = !state.isCollapse;
        }
    }
}