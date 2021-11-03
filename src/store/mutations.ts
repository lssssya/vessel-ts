import * as types from './mutation-types'

import { MutationTree } from 'vuex'
import { State, User } from './types'

const mutations: MutationTree<State> = {
  [types.SET_USER_INFO](state: State, userInfo: User) {
    state.userInfo = userInfo
  }
}

export default mutations