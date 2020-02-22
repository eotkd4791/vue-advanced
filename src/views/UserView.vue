<template>
  <div>
    <user-profile :info="userInfo">
      <div slot="username">{{ userInfo.id }}</div>
      <span slot="time">{{ 'Joined ' + userInfo.created }},</span>
      <span slot="karma">{{ ' ' + userInfo.karma }}</span>
      <!-- 카르마 줄 안바뀜, 글씨체 굵음 -->
    </user-profile>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    }
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userName);
  }
};
</script>