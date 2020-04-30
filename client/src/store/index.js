import Vue from "vue";
import Vuex from "vuex";
import arPack from "../language/arabic";

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
    langPack: arPack
  },
  mutations: {
    changeLoginPressedState: (state, payload) => {
      state.isLoginPressed = payload;
    }
  },
  actions: {
    pressLogin: ({ commit }, payload) => {
      commit("changeLoginPressedState", payload);
    }
  },
  modules: {}
});
