<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import Bus from "../utils/bus.js";
export default {
  components: {
    ListItem
  },
  created() {
    Bus.$emit("start:spinner");
    this.$store
      .dispatch("FETCH_ASK")
      .then(() => {
        window.console.log("fetched");
        Bus.$emit("end:spinner");
      })
      .catch(error => {
        window.console.log(error);
      });
    Bus.$emit("end:spinner");
  }
};
</script>
