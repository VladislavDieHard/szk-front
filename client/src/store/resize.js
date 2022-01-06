export default {
    state: {
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth < 1200 && window.innerWidth > 768,
        isDesktop: window.innerWidth > 1200
    },
    getters: {
        getResize(state) {
            return {
                isMobile: state.isMobile,
                isTablet: state.isTablet,
                isDesktop: state.isDesktop,
            }
        }
    },
    mutations: {
        // SET_COLLAPSE: (state) => {
        //     state.isCollapse = !state.isCollapse;
        // }
    }
}