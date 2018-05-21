import * as TYPES from '../types'
import { MutationTree, ActionTree, Module } from "vuex";

const state: StateSnackBar = {
  axiosState: false,
  shareImg:''
}

const mutations: MutationTree<StateSnackBar> = {
  [TYPES.AXUIS_STATE](state: StateSnackBar, params: boolean) {
    state.axiosState = params
  },
  [TYPES.SAVE_SHARE_IMG](state: StateSnackBar, params: string) {
    state.shareImg = params
  }
}

export const module: Module<StateSnackBar, StateRoot> = {
  state,
  mutations
}
