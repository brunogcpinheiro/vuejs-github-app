<template>
  <div>
    <form @keypress.enter.prevent="handleSearch()">
      <input
        type="text"
        placeholder="Digite o usuário aqui..."
        v-model="inputValue" />
    </form>
  </div>
</template>

<script>
export default {

  name: 'Search',

  data () {
    return {
      inputValue: ''
    }
  },

  methods: {
    handleSearch () {
      this.axios.get(`https://api.github.com/users/${this.inputValue}`).then(res => {
        this.$store.state.user = {
          login: res.data.login,
          username: res.data.name,
          image: res.data.avatar_url,
          repos: res.data.public_repos,
          followers: res.data.followers,
          following: res.data.following,
          link: res.data.html_url
        }
      }).catch(() => {
        this.$swal('Oh no', 'Usuário não encontrado', 'error')
      })

      this.axios.get(`https://api.github.com/users/${this.inputValue}/repos`).then(res => {
        res.data.map(repo => {
          this.$store.state.repos.push({
            name: repo.name,
            link: repo.html_url
          })
        })
      }).catch(() => {
        this.$swal('Oh no', 'Erro na requisição', 'error')
      })

      this.axios.get(`https://api.github.com/users/${this.inputValue}/starred`).then(res => {
        res.data.map(star => {
          this.$store.state.starred.push({
            name: star.name,
            link: star.html_url
          })
        })
      }).catch(() => {
        this.$swal('Oh no', 'Erro na requisição', 'error')
      })

      this.$store.state.repos = []
      this.$store.state.starred = []
      this.$store.state.isFetched = true
      this.$store.state.isShowedRepos = false
      this.$store.state.isShowedStarred = false
      this.inputValue = ''
    }
  }

}
</script>

<style lang='css' scoped>
input {
  width: 100%;
  font-size: 20px;
  border: 1px dashed black;
  border-radius: 5px;
  padding: 10px;
}

.sweet-alert {
  background: white;
}
</style>
