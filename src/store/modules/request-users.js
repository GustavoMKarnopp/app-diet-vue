import axios from 'axios';
import {
  getCookie as getCookieLocal,
  deleteCookie as deleteCookiesLocal
} from '../../util/cookies';
import {
  setItem as setItemLocal,
} from '../../util/localStorage';
// const API_URL = process.env.VUE_APP_PROD
const API_URL = process.env.VUE_APP_DEV
let sessionId = getCookieLocal('sessionId')
const state = {
  userExist: false
};

const mutations = {
  USER_EXIST(state, payload) {
    state.userExist = payload;
  },
};

const actions = {
  async createUser({
    dispatch
  }, dados) {
    try {
      const response = await axios.post(`${API_URL}/diet`, dados, {
        withCredentials: true
      });
      if (response) {
        return dispatch('getUser')
      }
    } catch (error) {
      console.log('Error: ' + error)
    }
  },

  async getUser({
    commit
  }) {
    try {
      if (sessionId === null) {
        commit('USER_EXIST', true)
      } else {
        const response = await axios.get(`${API_URL}/diet`, {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${sessionId}`
          }
        });
        setItemLocal('dataUser', response.data)
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
  }
};

const getters = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
