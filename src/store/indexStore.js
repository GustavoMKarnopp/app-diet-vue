/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import Vuex from 'vuex';
import requestUsers from './modules/request-users';


Vue.use(Vuex);
/* eslint-disable */
const store = new Vuex.Store({
  modules: {
    requestUsers,
  },
});

export default store;
