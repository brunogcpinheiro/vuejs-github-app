<template>
  <div class="repos-info" v-if="isFetched">
    <div class="repos">
      <h3>Repositórios</h3>
      <p :key="index" v-for="(repo, index) in repos">
        <a :href="repo.link" target="blank">
          {{ repo.name }}
        </a>
      </p>
    </div>
    <div class="starred">
      <h3>Favoritos</h3>
      <p :key="index" v-for="(star, index) in starred">
        <a :href="star.link" target="blank">
          {{ star.name }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Repos',

  computed: {
    repos () {
      return this.$store.state.repos
    },
    starred () {
      return this.$store.state.starred
    },
    isFetched () {
      return this.$store.state.isFetched
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
