<template>
  <div class="actions" v-if="isFetched">
    <button @click="handleShowRepos">
      Mostrar Alguns Repositórios
    </button>
    <button @click="handleShowStarred">
      Mostrar Alguns Favoritos
    </button>
  </div>
</template>

<script>
export default {

  name: 'Actions',

  methods: {
    handleShowRepos () {
      this.$store.state.isShowedRepos = true
    },
    handleShowStarred () {
      this.$store.state.isShowedStarred = true
    }
  },
  computed: {
    isFetched () {
      return this.$store.state.isFetched
    }
  }
}
</script>

<style lang="css" scoped>

button {
  background: transparent;
  border-radius: 4px;
  border: 1px solid black;
  color: black;
  width: 49%;
  cursor: pointer;
  height: 50px;
  padding: 10px;
  margin: 20px 0;
}

.actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
