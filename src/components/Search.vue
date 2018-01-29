<template>
  <div>
    <v-form>
    <v-text-field
      label="Digite o nome do usuário..."
      type="search"
      color="indigo darker-1"
    ></v-text-field>
  </v-form>
  </div>
</template>

<script>
export default {

  name: 'Search',

  data () {
    return {

    }
  }
}
</script>

<style lang='css' scoped>
input {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border-color: 1px solid royalblue;
  border-radius: 5px;
}
</style>
