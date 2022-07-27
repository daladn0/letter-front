import { TYPES } from "@/constants/toast";

export default {
  namespaced: true,
  state: () => ({
    isVisible: false,
    message: "",
    heading: "",
    type: TYPES.SUCCESS,
  }),

  getters: {
    isVisible: ({ isVisible }) => isVisible,
    message: ({ message }) => message,
    heading: ({ heading }) => heading,
    type: ({ type }) => type,
  },

  mutations: {
    setIsVisible(state, visibility) {
      state.isVisible = visibility;
    },

    setContent(state, {heading, message}) {
      state.message = message;
      state.heading = heading
    },

    setType(state, type) {
      state.type = type;
    },
  },

  actions: {
    showToast({commit}, { type, content }) {
      commit('setIsVisible', false)

      setTimeout(() => {
        commit('setContent', content)
        commit('setType', type)
        commit('setIsVisible', true)
      }, 200)
    },

    hideToast({commit}) {
      commit('setIsVisible', false)
    }
  }
};
