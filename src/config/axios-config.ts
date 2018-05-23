import axios from 'axios';
// axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http1':'http2'
axios.defaults.timeout = 10 * 1000;
interface Res {
  result:string,
  data:object|string
}
axios.interceptors.request.use(function (config) {
  // 发送请求前，将 state 中 Authorization 写入请求头部
  // store.dispatch('chang_Axios',false)
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {

  // 更新 state 中 Authorization 一项
  // store.dispatch('chang_Axios',false)
  return response;
}, function (error) {
  // store.dispatch('chang_Axios',false)
    console.log(error)
    if (error.status == 401) {
      console.log(error.status)
      // store.dispatch('status401');
    }

  return Promise.reject(error);
});