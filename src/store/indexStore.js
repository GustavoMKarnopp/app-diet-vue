import Vue from 'vue';
import Vuex from 'vuex';
import requestUsers from './modules/request-users';
import requestDiet from './modules/request-dieta';
import modalGlobal from './modules/modal-global';
import dadosInputs from './modules/input-dados';


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    requestUsers,
    requestDiet,
    modalGlobal,
    dadosInputs
  },
});

export default store;
