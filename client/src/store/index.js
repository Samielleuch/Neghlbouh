import Vue from "vue";
import Vuex from "vuex";
import arPack from "../language/arabic";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ],
  state: {
    isLoginPressed: false,
    language: "ar",
    langPack: arPack,
    currentUser: undefined,
    token: ""
  },
  mutations: {
    changeLoginPressedState: (state, payload) => {
      state.isLoginPressed = payload;
    },
    setUser: (state, { token, user }) => {
      state.currentUser = user;
      state.token = token;
    }
  },
  actions: {
    pressLogin: ({ commit }, payload) => {
      commit("changeLoginPressedState", payload);
    },
    loginUser: ({ commit }, payload) => {
      commit("setUser", payload);
    }
  },
  modules: {}
});