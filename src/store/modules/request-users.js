import axios from 'axios';
import {getCookie as getCookieLocal} from '../../util/cookies';
const API_URL = process.env.VUE_APP_DEV

const state = {
  userExist : false
};

const mutations = {
  USER_EXIST(state, payload) {
    state.userExist = payload;
  },
};

const actions = {
  
  async  createUser({ commit, dispatch }) {
    try{
      const response = await axios.post(`${API_URL}/diet`, {
        first_name:"Gustavo",
        last_name:"Henrique Karnopp",
        email:"dev@gmail.com"
      }, {
        withCredentials: true
      });
      if(response){
        return dispatch('getUser').then((response) => {
          console.log(response, 'response')
          // commit('someOtherMutation')
        })
      }
    } catch (error) {
      console.log('Error: ' + error)
    } 
  },    
  
  async  getUser({ commit, dispatch }) {
    try{
      let sessionId = getCookieLocal('sessionId')
      console.log(sessionId === null)
      if(sessionId === null){
        commit('USER_EXIST', true)
        // await dispatch('createUser')
      }else{
        const response = await axios.get(`${API_URL}/diet`, {
          withCredentials: true, // Isso garante que os cookies sejam enviados com a requisição
          headers: {
            'Authorization': `Bearer ${sessionId}`  
          }
        });
        if(!response.data){
          console.log(response, 'data')
          
        }
        
      }
    } catch (error) {
      console.log('Error: ' + error)
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
