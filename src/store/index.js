import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from '@/store/auth.module';
import { sidebar } from '@/store/sidebar.module';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    sidebar,
  },
});
