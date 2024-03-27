import Vue from 'vue';
import Vuex from 'vuex';
import requestUsers from './modules/request-users';
import modalGlobal from './modules/modal-global';


Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    requestUsers,
    modalGlobal
  },
});

export default store;
