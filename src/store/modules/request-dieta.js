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
      dietClean : '0',
      totalDietClean : '0',
      totalDietDirty : '0',
      totalMels : '0',
      porcentagemMetricas : '0'
  },
  dadosStorage: ''
};

const mutations = {

  METRICAS_DIETA(state) {
    let metricasDietEstatisticPocento
    let metrics = getItemLocal('session_diet').melsMetricas

    //Valida se existe metricas
    if(metrics.totalMels !== 0){
      let porcent = (metrics.totalDietClean/metrics.totalMels)*100
      metricasDietEstatisticPocento = porcent.toFixed(2)
    }else{
      metricasDietEstatisticPocento = '50'
    }

    state.metricasDietas.dietClean = metrics.dietClean;
    state.metricasDietas.totalDietClean = metrics.totalDietClean;
    state.metricasDietas.totalDietDirty = metrics.totalDietDirty;
    state.metricasDietas.totalMels = metrics.totalMels;
    state.metricasDietas.porcentagemMetricas = metricasDietEstatisticPocento;
  },

  ATUALIZA_STORERAGE(state){
    let melsTotals = getItemLocal('session_diet').melsTotals;

    // Verifica se mels é um array antes de prosseguir
    if (Array.isArray(melsTotals.meals)) {

      let dietas = melsTotals.meals; // Atribui diretamente se já for um array

      const grupos = {};

      // Corrige o nome do método para forEach
      dietas.forEach(obj => {
        // Extraia a data (sem o tempo) para agrupar por ela
        const data = obj.created_at.split(' ')[0]; // Isso pega apenas a parte da data da string 'created_at'

        // Se o grupo para essa data ainda não existe, crie-o
        if (!grupos[data]) {
          // grupos['data'] = data
          grupos[data] = []
        }

        // Adicione o objeto ao grupo correspondente
        grupos[data].push(obj);
      });

      state.dadosStorage = grupos;

      
    } else {
      console.error('mels não é um array');
    }
  }
};

const actions = {

  //TODO Pega metricas de dieta
  async getMetriacas({
    dispatch,
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
        // dispatch('getListTotalDietas')
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
