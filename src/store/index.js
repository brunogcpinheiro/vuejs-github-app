import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: [],
    repos: [],
    starred: [],
    isFetched: false,
    isShowedRepos: false,
    isShowedStarred: false
  }
})

export default store
