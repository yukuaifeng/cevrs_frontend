import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        results: {
            data: [],
            message: 'success'
        }
    },
    mutations: {
        change(state, data) {
            state.results = data;
        }
    },
    getters: {
        getResultData: state => {
            return state.results.data;
        }
    },
    actions: {
        changeResults(context, data) {
            context.commit('change', data)
        }
    }
})

export default store