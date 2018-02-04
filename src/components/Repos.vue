<template>
  <div class="repos-info">
    <div class="repos">
      <h3>Repositórios</h3>
      <p :key="index" v-for="(repo, index) in repos">
        {{ repo.name }}
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
