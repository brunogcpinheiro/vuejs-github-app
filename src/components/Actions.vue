<template>
  <div class="actions">
    <button @click="handle">
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
  }
}
</script>

<style lang="css" scoped>

button {
  background: transparent;
  border-radius: 4px;
  border: 2px solid blue;
  color: blue;
  width: 49%;
  cursor: pointer;
  height: 50px;
  padding: 10px;
  margin-top: 10px;
}

.actions {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
</style>
