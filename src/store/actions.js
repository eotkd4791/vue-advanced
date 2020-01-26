import { 
  fetchNewsList,
  fetchAskList, 
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => { 
        context.commit('SET_NEWS', response.data);
      })
      .catch(error => {
        window.console.error(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASK', data);
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
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        window.console.error(error);
      });  
  },
  FETCH_ITEM({ commit }, id) {
    fetchCommentItem(id)
      .then(({ data }) => {
        commit('SET_ITEM', data);
        window.console.log(data);
      })
      .catch(error => {
        window.console.log(error);
      });
  }
}