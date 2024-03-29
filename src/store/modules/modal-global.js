const state = {
  showModalExclusao: false,
  modalCadastrarUser: false,
};

const mutations = {
  MODAL_GLOBAL_EXCLUSAO(state, payload) {
    state.showModalExclusao = payload;
  },
  MODAL_GLOBAL_CADASTRO(state, payload) {
    state.modalCadastrarUser = payload;
  },
};

const actions = {
  async modalGlobalExclusao({ commit }, payload) {
    commit('MODAL_GLOBAL_EXCLUSAO', payload);
  },
  async modalGlobalCadastro({ commit }, payload) {
    commit('MODAL_GLOBAL_CADASTRO', payload);
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
