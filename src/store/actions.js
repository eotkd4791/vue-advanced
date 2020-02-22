import {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList,
} from '../api/index.js';

export default {
  async FETCH_NEWS(context) { //방법 1 에러 처리 안한것.
    const response = await fetchNewsList();
    context.commit('SET_NEWS', response.data);
    return response;
  },
  async FETCH_ASK({ commit }) { //방법 2 에러 처리 한것.
    try {
      const response = await fetchAskList();
      commit('SET_ASK', response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS({ commit }) {  // Destructuring.. FETCH_NEWS와 비교
    const response = await fetchJobsList(); //api단에서 에러 처리 => 에러를 미리 처리하고 들어와서 좀 더 깔끔하다.
    commit('SET_JOBS', response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit('SET_USER', response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const response = await fetchCommentItem(id);
    commit('SET_ITEM', response.data);
    return response;
  },
  async FETCH_LIST({ commit }, pageName) {
    const response = await fetchList(pageName);
    commit('SET_LIST', response.data);
    return response;
  }
}