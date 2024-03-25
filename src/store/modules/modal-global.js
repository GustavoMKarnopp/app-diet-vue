const state = {
  showModalExclusao: false,
};

const mutations = {
  // PUT_CONFIRM_ANIVER(state, payload) {
  //   state.qtd_confirmado_convidados = payload;
  // },

  // eslint-disable-next-line no-shadow
  MODAL_GLOBAL_EXCLUSAO(state, payload) {
    state.showModalExclusao = payload;
  },
};

const actions = {
  // async getConfirmaition({ commit }, payload) {
  //   commit('PUT_CONFIRM_ANIVER', payload.e);
  // },

  async modalGlobalExclusao({ commit }, payload) {
    commit('MODAL_GLOBAL_EXCLUSAO', payload);
  },
};

const getters = {
};

export default {
  namespaced: true, // isso permite que o módulo tenha um namespace próprio
  state,
  mutations,
  actions,
  getters,
};
