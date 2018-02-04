<template>
  <div class="actions" v-if="isFetched">
    <button>
      Mostrar Repositórios
    </button>
    <button>
      Mostrar Favoritos
    </button>
  </div>
</template>

<script>
export default {

  name: 'Actions',

  data () {
    return {
      isActive: false
    }
  },
  methods: {
    handle () {
      this.isActive = !this.isActive
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
