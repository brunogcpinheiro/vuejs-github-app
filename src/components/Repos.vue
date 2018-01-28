<template>
  <div class="repos-info">
    <div class="repos">
      <h3>Repositórios</h3>
      <p :key="index" v-for="(repo, index) in repos"><a :href="repo.link">{{ repo.name }}</a></p>
    </div>
    <div class="starred">
      <h3>Favoritos</h3>
      <p :key="index" v-for="(star, index) in starred"><a :href="star.link">{{ star.name }}</a></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
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
      axios.get(`https://api.github.com/users/brunogcpinheiro/repos`).then(res => {
        res.data.map(repo => {
          this.repos.push({
            name: repo.name,
            link: repo.html_url
          })
        })
      })
    },
    fetchStarredData () {
      axios.get(`https://api.github.com/users/brunogcpinheiro/starred`).then(res => {
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
</style>
