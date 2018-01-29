<template>
  <div class="repos-info">
    <div class="repos">
      <h3>Repositórios</h3>
      <p :key="index" v-for="(repo, index) in repos"><a :href="repo.link" target="blank">{{ repo.name }}</a></p>
    </div>
    <div class="starred">
      {{ $store.state }}
      <h3>Favoritos</h3>
      <p :key="index" v-for="(star, index) in starred"><a :href="star.link" target="blank">{{ star.name }}</a></p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Repos',

  data () {
    return {
      repos: [{
        name: '',
        link: ''
      }],
      starred: [{
        name: '',
        link: ''
      }]
    }
  },
  created () {
    this.fetchReposData()
    this.fetchStarredData()
  },
  methods: {
    fetchReposData () {
      this.axios.get(`https://api.github.com/users/brunogcpinheiro/repos`).then(res => {
        res.data.map(repo => {
          this.repos.push({
            name: repo.name,
            link: repo.html_url
          })
        })
      })
    },
    fetchStarredData () {
      this.axios.get(`https://api.github.com/users/brunogcpinheiro/starred`).then(res => {
        res.data.map(star => {
          this.starred.push({
            name: star.name,
            link: star.html_url
          })
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>
.repos.info {
  display: flex;
  justify-content: space-between;
}
.repos {
  float: left;
  width: 50%;
}

.starred {
  float: right;
  width: 50%;
  padding-left: 10px;
}

a, a:visited, a:link, a:active {
  text-decoration: none;
  color: black;
}

a:hover {
  color: #0984e3;
}
</style>
