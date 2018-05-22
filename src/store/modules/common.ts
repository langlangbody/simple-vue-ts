import * as TYPES from '../types'
import { MutationTree, Module } from "vuex";

const state: StateSnackBar = {
  axiosState: false,
  shareImg:'',
  snack:''
}

const mutations: MutationTree<StateSnackBar> = {
  // 发送请求的状态
  [TYPES.AXUIS_STATE](state: StateSnackBar, params: boolean) {
    state.axiosState = params
  },
  // 分享图片的切换
  [TYPES.SAVE_SHARE_IMG](state: StateSnackBar, params: string) {
    state.shareImg = params
  },
  // snackbar提示窗状态
  [TYPES.SNACK](state: StateSnackBar, params: string) {
    state.snack = params
  }
}

export const module: Module<StateSnackBar, StateRoot> = {
  state,
  mutations
}
