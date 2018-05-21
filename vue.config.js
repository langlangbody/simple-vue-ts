// vue.config.js
const path = require('path')
module.exports = {

  baseUrl: '/',

  // use the full build with in-browser compiler?
  // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  compiler: false,

  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('vue$', 'vue/dist/vue.esm.js')
    
    config.module
      .rule('html')
      .test(/\.(html)$/)
      .use('html-loader')
      .loader('html-loader')
  },

  // generate sourceMap for production build?
  productionSourceMap: false,

  // CSS related options

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,

  // PWA插件的选项。
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},

  // 配置WebPACK DEV服务器行为
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 4200
    // https: false,
    // hotOnly: false,
    // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
    // proxy: {
    //   '/api/v1': {
    //     target: 'http://xxxxx.co',
    //     ws: true,
    //     changeOrigin: true
    //   }
    // } // string | Object
    // before: app => { }
  },

  // 第三方插件
  pluginOptions: {}
}
