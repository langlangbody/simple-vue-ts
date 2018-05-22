import { ActionTree } from "vuex";
/* eslint-disable */
import {AXUIS_STATE,SAVE_SHARE_IMG,SNACK} from './types'
// axios请求异常
export const axios_err = (context:any,params:object|any) => {
  context.commit('AXUIS_STATE',params)
}
// save_shareImg头像url
export const save_shareImg = (context:any,params:object|any) => {
  context.commit('SAVE_SHARE_IMG',params)
}
// 提示窗调取
export const chang_snack = (context:any,params:string|any) => {
  context.commit('SNACK',params)
}

