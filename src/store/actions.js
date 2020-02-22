import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
} from '../api/index.js';

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => {
        window.console.log("NEWS");
        context.commit('SET_NEWS', response.data);
        return response;
      })
      .catch(error => {
        window.console.error(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        window.console.log("ASK");
        commit('SET_ASK', data);
      })
      .catch(error => {
        window.console.error(error);
      });
  },
  FETCH_JOBS({ commit }) {  // Destructuring.. FETCH_NEWS와 비교
    fetchJobsList()
      .then(({ data }) => {
        window.console.log("JOBS");
        commit('SET_JOBS', data);
      })
      .catch(error => {
        window.console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then(({ data }) => {
        window.console.log("USERS");
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
        window.console.log("ITEM");
      })
      .catch(error => {
        window.console.log(error);
      });
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
      .then(({ data }) => commit('SET_LIST', data))
      .catch((error) => window.console.log(error));
  }
}