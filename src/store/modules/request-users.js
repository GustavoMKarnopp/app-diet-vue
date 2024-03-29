import axios from 'axios';
import {getCookie as getCookieLocal, deleteCookie as deleteCookiesLocal } from '../../util/cookies';
const API_URL = process.env.VUE_APP_DEV
let sessionId = getCookieLocal('sessionId')
const state = {
  userExist : false
};

const mutations = {
  USER_EXIST(state, payload) {
    state.userExist = payload;
  },
};

const actions = {
  async  createUser({dispatch}, dados) {
    try{
      const response = await axios.post(`${API_URL}/diet`, dados, { withCredentials: true });
      if(response){
        return dispatch('getUser')
      }
    } catch (error) {
      console.log('Error: ' + error)
    } 
  },    
  
  async  getUser({ commit }) {
    try{
      if(sessionId === null){
        commit('USER_EXIST', true)
      }else{
        const response = await axios.get(`${API_URL}/diet`, {
          withCredentials: true, // Isso garante que os cookies sejam enviados com a requisição
          headers: {
            'Authorization': `Bearer ${sessionId}`  
          }
        });
        console.log(response, 'RESPONSE GERTUSER')
      }
    } catch (error) {
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status fora do intervalo de 2xx
        if(sessionId != null && error.response.status == 401){
          deleteCookiesLocal('sessionId')
          commit('USER_EXIST', true)
        }
      } else if (error.request) {
        // A requisição foi feita mas não houve resposta
        console.log(error.request);
      } else {
        // Algo aconteceu na configuração da requisição que causou um erro
        console.log('Error', error.message);
      }
    } 
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
