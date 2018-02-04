<template>
  <div id="app">
    <Search />
    <UserInfo />
    <Actions />
  </div>
</template>

<script>
import Search from './components/Search'
import UserInfo from './components/UserInfo'
import Actions from './components/Actions'
import Repos from './components/Repos'

export default {
  name: 'app',
  components: {
    Search,
    UserInfo,
    Actions,
    Repos
  },
  data () {
    return {
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Space Mono', sans-serif;
  background: #dfe6e9;
}

#app {
  margin: 20px auto;
  max-width: 680px;
}

</style>
