/* eslint-disable */
import {USER_LOGIN,AXUIS_STATE,SAVE_SHARE_IMG} from './types'

export const user_login = (context:any, params:any) => {
  context.commit('USER_LOGIN',params)
}
export const chang_Axios = (context:any,params:object|any) => {
  context.commit('AXUIS_STATE',params)
}

export const save_shareImg = (context:any,params:object|any) => {
  context.commit('SAVE_SHARE_IMG',params)
}

