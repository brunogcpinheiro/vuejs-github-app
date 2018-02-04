<template>
  <div class="userinfo" v-if="isFetched">
    <img :src="info.image" alt="Avatar">
    <div class="user-info">
      <h2><a :href="info.link" target="blank">{{ info.username }}</a></h2>
      <p>Username: <span>{{ info.login }}</span></p>
      <p>Repositórios: <span>{{ info.repos }}</span></p>
      <p>Seguidores: <span>{{ info.followers }}</span></p>
      <p>Seguindo: <span>{{ info.following }}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  computed: {
    info () {
      return this.$store.state.user
    },
    isFetched () {
      return this.$store.state.isFetched
    }
  }
}
</script>

<style lang="css" scoped>
img {
  margin-top: 15px;
  max-width: 250px;
  float: left;
}
span {
  font-weight: bold;
}
a, a:visited, a:link, a:active {
  text-decoration: none;
  color: black;
}
a:hover {
  color: #0984e3;
}
.user-info {
  float: left;
  padding: 10px;
  margin: 15px;
}
</style>
