<template>
  <div class="repos-info">
    <div class="repos">
      <h3>Repositórios</h3>
      <p>{{ repos }}</p>
    </div>
    <div class="starred">
      <h3>Favoritos</h3>
      <p>{{ starred }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  name: 'Repos',

  data () {
    return {
      repos: [],
      starred: []
    }
  },
  created () {
    this.fetchReposData()
    this.fetchStarredData()
  },
  methods: {
    fetchReposData () {
      axios.get(`https://api.github.com/users/brunogcpinheiro/repos`).then(res => {
        this.repos = res.data[0].name
      })
    },
    fetchStarredData () {
      axios.get(`https://api.github.com/users/brunogcpinheiro/starred`).then(res => {
        this.starred = res.data[0].name
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
