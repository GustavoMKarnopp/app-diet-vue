import axios from 'axios';
import {getCookie as getCookieLocal, deleteCookie as deleteCookiesLocal} from '../../util/cookies';
import {getItem as getItemLocal, setItemLocalSession as setItemSessionLocal, removeItem as removeItemLocal} from '../../util/localStorage';
import $router from "@/router";

// const API_URL = process.env.VUE_APP_PROD
const API_URL = process.env.VUE_APP_DEV
let sessionId = getCookieLocal('sessionId')
const state = {
  metricasDietas: {
      dietClean : '0',
      totalDietClean : '0',
      totalDietDirty : '0',
      totalMels : '0',
      porcentagemMetricas : '0'
  },
  dadosStorage: '',
  userParamsData: '',
  setFeedbackDiet: false,
};
const mutations = {
  METRICAS_DIETA(state) {
    let metricasDietEstatisticPocento
    let metrics = getItemLocal('session_diet').melsMetricas
    if(metrics.totalMels !== 0){
      let porcent = (metrics.totalDietClean/metrics.totalMels)*100
      metricasDietEstatisticPocento = porcent.toFixed(2)
    }else{
      metricasDietEstatisticPocento = '0'
    }
    state.metricasDietas.dietClean = metrics.dietClean;
    state.metricasDietas.totalDietClean = metrics.totalDietClean;
    state.metricasDietas.totalDietDirty = metrics.totalDietDirty;
    state.metricasDietas.totalMels = metrics.totalMels;
    state.metricasDietas.porcentagemMetricas = metricasDietEstatisticPocento;
  },

  ATUALIZA_STORERAGE(state){
    let melsTotals = getItemLocal('session_diet').melsTotals;
    if (Array.isArray(melsTotals.meals)) {
      let dietas = melsTotals.meals;
      const grupos = {};
      dietas.forEach(obj => {
        const data = obj.created_at.split(' ')[0]; 
        if (!grupos[data]) {
          grupos[data] = []
        }
        grupos[data].push(obj);
      });
      state.dadosStorage = grupos;
    } else {
      console.error('mels não é um array');
    }
  },
  SET_PARAMS_DATA(state){
    let melsTotals = getItemLocal('session_diet').melsDetalhes
    state.userParamsData = melsTotals
  },
  SET_FEEDBACK_DIET(state, payload){
    state.setFeedbackDiet = payload
  },
};

const actions = {
  //TODO Pega metricas de dieta
  async getMetriacas({
    commit
  }) {
    try {
      if (sessionId === null) {
        commit('USER_EXIST', true)
      } else {
        const response = await axios.get(`${API_URL}/mels/metrics`, {
          withCredentials: true, 
          headers: {
            'Authorization': `Bearer ${sessionId}`
          }
        });
        setItemSessionLocal('session_diet', { melsMetricas: response.data })
        commit('METRICAS_DIETA', true)

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
  async cadastrarDieta({commit}, dados) {
    try {
      if (sessionId === null) {
        commit('USER_EXIST', true)

      } else {
        const response = await axios.post(`${API_URL}/mels`, dados, {
          withCredentials: true
        });
        if (response) {
          commit('SET_FEEDBACK_DIET', dados.isOnDiet)
          $router.push({ name: 'Feedback' })
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

  //TODO Pega metricas de dieta
  async getListTotalDietas({
    commit
  }) {
    try {
      if (sessionId === null) {
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
  //TODO GRAVAR ROUTE PARAMS
  async setRouteParams({commit}, setParams) {
    try {
      if (sessionId === null) {
        commit('USER_EXIST', true)
      } else {
        if(setParams !== undefined) {
          setItemSessionLocal('session_diet', { melsDetalhes: setParams })
          commit('SET_PARAMS_DATA', true)
        }else{
          commit('SET_PARAMS_DATA', true)
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

  async updateDieta({commit}, dados) {
    try {

      if (sessionId === null) {
        commit('USER_EXIST', true)
      } else {
          const response = await axios.put(`${API_URL}/mels/${dados.id}`, dados.date, {
            withCredentials: true
          });
          if (response.status == 201) {
            removeItemLocal('session_diet');
            $router.push({ name: 'Home' })
          }
        // }
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

const getters = {};

export default {
  namespaced: true, // isso permite que o módulo tenha um namespace próprio
  state,
  mutations,
  actions,
  getters,
};
