import {getAllPosts} from "@/api/posts";


export default {
    state: {
        posts: []
    },
    getters: {
        getPosts: (state) => {
            return state.posts;
        }
    },
    mutations: {
        SET_POSTS: (state, data) => {
            state.posts = data;
        }
    },
    actions: {
        fetchPosts: async ({ commit }) => {
            const posts = await getAllPosts()
            commit('SET_POSTS', posts)
        }
    }
}