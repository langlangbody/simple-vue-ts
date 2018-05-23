const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
// vue.config.js
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
    
    config.externals = {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'vuetify': 'Vuetify'
      }

    config.module
      .rule('html')
      .test(/\.(html)$/)
      .use('html-loader')
      .loader('html-loader')
  },
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin(),
          new BrotliPlugin(),
          new BundleAnalyzerPlugin({analyzerMode: 'static'}),
        ]
      };
    }
    return {
      plugins: [
        new BundleAnalyzerPlugin(),
      ]
    }
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
  css: {
    extract: true,
    localIdentName: '[name]_[local]_[hash:base64:5]',
    sourceMap: false,
    // loaderOptions: {}
  },
  // 第三方插件
  pluginOptions: {}
}
