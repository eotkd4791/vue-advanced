<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin";
// import Bus from "../utils/bus.js";

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
};
</script>
