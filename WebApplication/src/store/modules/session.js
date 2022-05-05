
///////////////////////////// STATE
const state = () => ({
    basicAuthToken: null,
    bearerToken: null
})

///////////////////////////// GETTERS
const getters = {
}

///////////////////////////// MUTATIONS

const mutations = {
    setBasicAuthToken(state, { token }) {
        state.basicAuthToken = token;
    }
}

///////////////////////////// ACTIONS

const actions = {
    setBasicAuthToken({ commit }, payload) {
        const token = payload.login + ":" + payload.pwd;
        const hash = btoa(token);
        commit('setBasicAuthToken', { token: hash});
    }
}

///////////////////////////// EXPORT

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}