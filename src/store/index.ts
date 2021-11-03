import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import mutations from './mutations'
import actions from './actions'

import { State } from './types'

Vue.use(Vuex)

const state: State = {
  userInfo: {
    languageId: 'zh_CN',
    skin: 'redblack',
    code: []
  }
}

const store: StoreOptions<State> = {
  state,
  actions,
  mutations,
  modules: {},
}

export default new Vuex.Store<State>(store)
