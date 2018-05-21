/**
 * @desc: mock 接口返回数据声明
 * @author: xll
 */

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

axios.interceptors.request.use(request => {
  return request
}, error  => {
  return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
  return response.data
}, error => {
  return Promise.reject(error)
})
// set delay response time to 300ms
const mock = new MockAdapter(axios, { delayResponse: 300 });

// 用户上传信息 后台生成的个人信息
import UserDetals from '@/mockData/detals';
mock.onGet('/tapsbook_roomies').reply(200, UserDetals);

import Roomie_votes from '@/mockData/roomie_votes';
mock.onPost('/tapsbook_roomie_votes').reply(200, Roomie_votes);

// 中国好舍友排行榜列表
import Tapsbook_roomies from '@/mockData/tapsbook_roomies';
mock.onPost('/tapsbook_roomies').reply(200, Tapsbook_roomies);
