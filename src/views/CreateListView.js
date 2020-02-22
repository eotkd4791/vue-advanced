import ListView from './ListView.vue';
import Bus from '../utils/bus.js';

export default function createdListView(name) { //하이 오더 컴포넌트 (다른 컴포넌트 들의 상위 컴포넌트 App.vue와 다른 컴포넌트의 사이)
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들
    name,
    created() {
      Bus.$emit("start:spinner");
      this.$store.dispatch("FETCH_LIST", this.$route.name)
        .then(() => {
          window.console.log("HOC");
          Bus.$emit("end:spinner");
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    render(createElement) {
      return createElement(ListView);
    }
  }
}