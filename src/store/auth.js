export default {
  namespaced: true,

  state: () => ({
    isAuth: false,
    currentUser: null,
  }),

  getters: {
    isAuth: ({ isAuth }) => isAuth,
    currentUser: ({ currentUser }) => currentUser,
  },

  mutations: {
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth;
    },

    setCurrentUser(state, user) {
      state.currentUser = user;
    },
  },

  actions: {
    login({ commit }, user) {
      commit("setCurrentUser", user);
      commit("setIsAuth", true);
    },

    logout({ commit }) {
      commit("setCurrentUser", null);
      commit("setIsAuth", false);
    },
  },
};
