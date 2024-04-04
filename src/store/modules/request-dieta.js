import axios from 'axios';
import {
  getCookie as getCookieLocal,
  deleteCookie as deleteCookiesLocal
} from '../../util/cookies';
import {
  setItem as setItemLocal,
  getItem as getItemLocal,
  setItemLocalSession as setItemSessionLocal
} from '../../util/localStorage';
import $router from "@/router";

const API_URL = process.env.VUE_APP_DEV
let sessionId = getCookieLocal('sessionId')
const state = {
  metricasDietas: {
      dietClean : '',
      totalDietClean : '',
      totalDietDirty : '',
      totalMels : '',
      porcentagemMetricas : ''
  },
  storageUpdate: false
};

const mutations = {
  METRICAS_DIETA(state, payload) {
    let metricasDietEstatisticPocento
    let metrics = getItemLocal('session_diet').melsMetricas

    let porcent = (metrics.totalDietClean/metrics.totalMels)*100
    metricasDietEstatisticPocento = porcent.toFixed(2)

    state.metricasDietas.dietClean = metrics.dietClean;
    state.metricasDietas.totalDietClean = metrics.totalDietClean;
    state.metricasDietas.totalDietDirty = metrics.totalDietDirty;
    state.metricasDietas.totalMels = metrics.totalMels;
    state.metricasDietas.porcentagemMetricas = metricasDietEstatisticPocento;
  },

  ATUALIZA_STORERAGE(state, payload){
    if (payload == true) {
      state.storageUpdate = !state.storageUpdate;
    } else {
      state.storageUpdate = payload;
    }
  }
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
        //Seta o user no localstorage
        setItemSessionLocal('session_diet', { melsMetricas: response.data })
        commit('METRICAS_DIETA', true)

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
            name: 'Feedback'
          })
          // dispatch('getListTotalDietas')
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
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${sessionId}`
          }
        });
        if(response && response.data){
          setItemSessionLocal('session_diet', { melsTotals: response.data })
          commit('ATUALIZA_STORERAGE', true)
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
};

const getters = {};

export default {
  namespaced: true, // isso permite que o módulo tenha um namespace próprio
  state,
  mutations,
  actions,
  getters,
};
