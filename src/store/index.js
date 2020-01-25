import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api/index.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    ask: [],
    jobs: [],
  },
  getters: {
    fetchedAsk(state) {
      return state.ask;
    },
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_ASK(state, ask) {
      state.ask = ask;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs;
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => { 
          context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
          window.console.error(error);
        });
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(response => {
          context.commit('SET_ASK', response.data);
        })
        .catch(error => {
          window.console.error(error);
        });
    },
    FETCH_JOBS({ commit }) {  // Destructuring.. FETCH_NEWS와 비교
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch(error => {
          window.console.log(error);
        });
    },
  },
})