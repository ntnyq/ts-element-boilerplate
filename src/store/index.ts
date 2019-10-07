import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import app from './app'

Vue.use(Vuex)

const store: StoreOptions<{}> = {
  modules: {
    app,
  },
}

export default new Vuex.Store<{}>(store)
