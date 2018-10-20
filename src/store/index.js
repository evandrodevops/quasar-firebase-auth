import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: user,
    shared: shared
  },
  plugins: [(new VuexPersistence()).plugin]
})

export default store
