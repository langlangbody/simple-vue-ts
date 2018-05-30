/**
 * @desc: mock 接口返回数据声明
 * @author: xll
 */
import store from '@/store'

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

axios.interceptors.request.use(request => {
  store.dispatch('axios_state',false)
  return request
}, error  => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  store.dispatch('axios_state',true)
  return response
}, error => {
  store.dispatch('axios_state',true)
  return Promise.reject(error)
})
// set delay response time to 300ms
const mock = new MockAdapter(axios, { delayResponse: 1000 });

// 主题列表 
import themeList from '@/mockData/themeList';
mock.onGet(/\/theme\/*/).reply(200, themeList);

// 布局列表
import Layouts from "@/mockData/layoutsList";
mock.onGet(/\/layouts\/*/).reply(200, Layouts);

import Materials from "@/mockData/materials";
mock.onGet(/\/materials\/*/).reply(200, Materials);