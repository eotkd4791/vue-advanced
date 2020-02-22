import Bus from '../utils/bus.js';

export default {
  //재사용 컴포넌트 옵션 & 로직
  created() {
    Bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        window.console.log("fetched");
        Bus.$emit("end:spinner");
      })
      .catch(error => {
        window.console.log(error);
      });
  }

}