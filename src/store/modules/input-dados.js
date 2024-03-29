const state = {
  formData : {}
};

const mutations = {
  FORM_DATA_INPUTS(state, payload){
    state.formData = payload
  }
};

const actions = {   
  setFormInput({commit}, data){
    commit('FORM_DATA_INPUTS',data)
  }
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
