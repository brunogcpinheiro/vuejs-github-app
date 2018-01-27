<template>
  <div class="userinfo">
    <img :src="image" alt="Avatar">
    <div class="user-info">
      <h2><a href="https://github.com/brunogcpinheiro">{{ username }}</a></h2>
      <p>Repositórios: <span>{{ repos }}</span></p>
      <p>Seguidores: <span>{{ followers }}</span></p>
      <p>Seguindo: <span>{{ following }}</span></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'UserInfo',

  data () {
    return {
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
      axios.get(`https://api.github.com/users/brunogcpinheiro`).then(res => {
        this.username = res.data.name
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

a, a:visited, a:hover, a:link {
  text-decoration: none;
}

.user-info {
  float: left;
  padding: 10px;
  margin: 15px;
}
</style>
