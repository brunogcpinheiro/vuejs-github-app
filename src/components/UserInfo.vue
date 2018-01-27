<template>
  <div class="userinfo">
    <img src="https://avatars1.githubusercontent.com/u/13948019?v=4" alt="Avatar">
    <div class="user-info">
      <h2><a href="https://github.com/brunogcpinheiro">Bruno Pinheiro</a></h2>
      <p>Repositórios: <span>17</span></p>
      <p>Seguidores: <span>28</span></p>
      <p>Seguindo: <span>15</span></p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'UserInfo',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
img {
  margin-top: 15px;
  max-width: 250px;
  float: left;
}

span {
  font-weight: bold;
}

a, a:visited, a:hover, a:link {
  text-decoration: none;
}

.user-info {
  float: left;
  padding: 10px;
  margin: 15px;
}
</style>
