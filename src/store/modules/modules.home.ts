import * as TYPES from '../types'
import { MutationTree, Module } from "vuex";

interface HomeState {
  navCheck:string,

}

const state: HomeState = {
  navCheck:'no'
}

const mutations: MutationTree<HomeState> = {
  // 发送请求的状态
  [TYPES.NAV_STATE](state: HomeState, params: string) {
    state.navCheck = params
  }
}

export const module: Module<HomeState, StateRoot> = {
  state,
  mutations
}
