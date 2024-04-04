import axios from 'axios';
import {getCookie as getCookieLocal, deleteCookie as deleteCookiesLocal} from '../../util/cookies';
import {setItem as setItemLocal, getItem as getItemLocal, setItemLocalSession as setItemSessionLocal, removeItem as removeItemLocal} from '../../util/localStorage';

import $router from "@/router";

const API_URL = process.env.VUE_APP_DEV
let sessionId = getCookieLocal('sessionId')

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

  async deletarDieta({
  }) {
    try {
      
      let melsTotals = getItemLocal('session_diet').melsDetalhes
      
      if (sessionId === null) {
        commit('USER_EXIST', true)

      } else {
        console.log( melsTotals)
        console.log( )
        if(melsTotals && melsTotals.data && melsTotals.data.id){
          const response = await axios.delete(`${API_URL}/mels/${melsTotals.data.id}`,{
            withCredentials: true
          });
          console.log(response)
          if (response.status == 201) {
            removeItemLocal('session_diet');
            $router.push({ name: '/' })
          }
        }
      }
    } catch (error) {
      if (error.response) {
        if (sessionId != null && error.response.status == 401) {
          deleteCookiesLocal('sessionId')
          commit('USER_EXIST', true)
        }
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
    }
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
