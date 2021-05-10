import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
    count:0
}

const mutations = {
    increment (state) {
        state.count++
    }
}

const actions = {
    increment ({commit}) {
        commit("increment")
    }
}

const getters = {
    count:(state)=>{
        return state.count+10
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createPersistedState()]
})

export default store;