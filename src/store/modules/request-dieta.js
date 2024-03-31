import axios from 'axios';
import {
  getCookie as getCookieLocal,
  deleteCookie as deleteCookiesLocal
} from '../../util/cookies';
import {
  setItem as setItemLocal,
  setItemLocalSession as setItemSession
} from '../../util/localStorage';
import $router from "@/router";

const API_URL = process.env.VUE_APP_DEV
let sessionId = getCookieLocal('sessionId')
const state = {
  metricasDietas: []
};

const mutations = {
  METRICAS_DIETA(state, payload) {
    state.metricasDietas.push(payload);
  },
};

const actions = {

  //TODO Pega metricas de dieta
  async getMetriacas({
    commit
  }) {
    try {

      //Se sessionId for null abre o modal
      if (sessionId === null) {

        //Abre o modal quando da erro 401
        commit('USER_EXIST', true)

      } else {
        const response = await axios.get(`${API_URL}/mels/metrics`, {
          withCredentials: true, // Isso garante que os cookies sejam enviados com a requisição
          headers: {
            'Authorization': `Bearer ${sessionId}`
          }
        });
        console.log(response);
        commit('METRICAS_DIETA', response.data)
        //Seta o user no localstorage
        setItemSession('session_diet', {
          melsMetricas: response.data
        })

      }
    } catch (error) {
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status fora do intervalo de 2xx
        if (sessionId != null && error.response.status == 401) {

          //Deleta o cookie da sessao
          deleteCookiesLocal('sessionId')

          //Abre o modal quando da erro 401
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
  },
  async cadastrarDieta({
    dispatch
  }, dados) {
    try {

      //Se sessionId for null abre o modal
      if (sessionId === null) {

        //Abre o modal quando da erro 401
        commit('USER_EXIST', true)

      } else {
        const response = await axios.post(`${API_URL}/mels`, dados, {
          withCredentials: true
        });
        if (response) {
          $router.push({
            name: 'Home'
          })
          return dispatch('getListTotalDietas')
        }

      }
    } catch (error) {
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status fora do intervalo de 2xx
        if (sessionId != null && error.response.status == 401) {

          //Deleta o cookie da sessao
          deleteCookiesLocal('sessionId')

          //Abre o modal quando da erro 401
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
  },
  //TODO Pega metricas de dieta
  async getListTotalDietas({
    commit
  }) {
    try {

      //Se sessionId for null abre o modal
      if (sessionId === null) {

        //Abre o modal quando da erro 401
        commit('USER_EXIST', true)

      } else {
        const response = await axios.get(`${API_URL}/mels`, {
          withCredentials: true, // Isso garante que os cookies sejam enviados com a requisição
          headers: {
            'Authorization': `Bearer ${sessionId}`
          }
        });

        // commit('METRICAS_DIETA', response)
        setItemSession('session_diet', {
          melsTotals: response.data
        })

      }
    } catch (error) {
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status fora do intervalo de 2xx
        if (sessionId != null && error.response.status == 401) {

          //Deleta o cookie da sessao
          deleteCookiesLocal('sessionId')

          //Abre o modal quando da erro 401
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
  },
};

const getters = {};

export default {
  namespaced: true, // isso permite que o módulo tenha um namespace próprio
  state,
  mutations,
  actions,
  getters,
};
