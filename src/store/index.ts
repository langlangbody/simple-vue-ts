import Vue from 'vue'
import Vuex from 'vuex'
import { module as common } from './modules/common'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)


export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  getters,
  actions,
  modules: {
    common
  }
})
