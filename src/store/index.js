import VuexPersistence from 'vuex-persist'
import Vue from 'vue'
import Vuex from 'vuex'
import history from './history.js'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export default new Vuex.Store({
  modules: { history },
  plugins: [vuexLocal.plugin],
})
