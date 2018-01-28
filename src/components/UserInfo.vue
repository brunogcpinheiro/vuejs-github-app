<template>
  <div class="userinfo">
    <img :src="image" alt="Avatar">
    <div class="user-info">
      <h2><a href="https://github.com/brunogcpinheiro">{{ username }}</a></h2>
      <p>Username: <span>{{ login }}</span></p>
      <p>Repositórios: <span>{{ repos }}</span></p>
      <p>Seguidores: <span>{{ followers }}</span></p>
      <p>Seguindo: <span>{{ following }}</span></p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'UserInfo',

  data () {
    return {
      login: null,
      username: null,
      image: null,
      repos: null,
      followers: null,
      following: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.axios.get(`https://api.github.com/users/brunogcpinheiro`).then(res => {
        this.username = res.data.name
        this.login = res.data.login
        this.image = res.data.avatar_url
        this.repos = res.data.public_repos
        this.followers = res.data.followers
        this.following = res.data.following
      })
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

a, a:visited, a:hover, a:link, a:active {
  text-decoration: none;
}

.user-info {
  float: left;
  padding: 10px;
  margin: 0 15px;
}
</style>
