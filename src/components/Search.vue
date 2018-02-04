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
      })
      this.inputValue = ''
    }
  }

}
</script>

<style lang='css' scoped>
input {
  width: 100%;
  font-size: 20px;
  border-color: 1px solid royalblue;
  border-radius: 5px;
}
</style>
