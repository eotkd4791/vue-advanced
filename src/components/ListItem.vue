<template>
  <div>
    <ul class="news-list">
      <li v-for="item in listItems" class="post">
        <div class="points">{{ item.points || 0 }}</div>

        <div>
          <p class="news-title">
            <template v-if="item.domain">
              <a v-bind:href="item.url">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link v-bind:to="`item/${item.id}`">
                {{ item.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }} by
            <router-link
              v-bind:to="`user/${item.user}`"
              class="link-text"
              v-if="item.user"
              >{{ item.user }}
            </router-link>
            <a :href="item.url" v-else>{{ item.domain }}</a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.name
    };
  },
  created() {
    let ActionName;
    if (this.name === "news") {
      ActionName = "FETCH_NEWS";
    } else if (this.name === "ask") {
      ActionName = "FETCH_ASK";
    } else if (this.name === "jobs") {
      ActionName = "FETCH_JOBS";
    }
    this.$store.dispatch(ActionName);
  },
  computed: {
    listItems() {
      if (this.name === "news") {
        return this.$store.state.news;
      } else if (this.name === "ask") {
        return this.$store.state.ask;
      } else if (this.name === "jobs") {
        return this.$store.state.jobs;
      }
    }
  }
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center; /*세로에서 중앙정렬 */
  justify-content: center; /*가로에서 중앙정렬 */
  color: #42b883;
}
.news-title {
  margin: 0px;
}
.link-text {
  color: #828282;
}
</style>
