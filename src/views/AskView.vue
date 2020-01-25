<template>
  <div>
    <div v-for="ask in askItems">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },

    // #2
    // ...mapState({
    //   ask: state => state.ask //ask에 state.ask를 담는다.
    // }),

    // #3 mapGetters추가 : 속성명과 변수명 같게하고 싶으면 배열표기법
    // ...mapGetters([
    //   'fetchedAsk'
    // ])

    // #4 mapGetters추가 : 다른 속성명을 써준다. 템플릿의 v-for디렉티브에서도 적용해야한다.
    ...mapGetters({
      askItems: 'fetchedAsk'
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>