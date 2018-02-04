import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: [],
    repos: [],
    isFetched: false
  }
})

export default store
