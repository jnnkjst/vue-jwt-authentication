import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    token: localStorage.getItem("token") || "",
  },
  mutations: {
    login(state, token) {
      state.isAuthenticated = true;
      state.token = token;
      localStorage.setItem("token", token);
    },
    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  actions: {},
  modules: {},
});
