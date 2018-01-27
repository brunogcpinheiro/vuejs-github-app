<template>
  <div id="app">
    <Search />
    <UserInfo />
    <Actions />
    <Repos />
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
}

#app {
  margin: 15px;
}

</style>
