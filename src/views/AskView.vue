<template>
  <div>
    <div v-for="title in titles">{{ title.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';

export default {
  data() {
    return {
      titles: []
    }
  },
  created() {
    fetchAskList()
      .then(response => this.titles = response.data)
      .catch(error => window.console.error(error));
  }
}
</script>

<style>

</style>