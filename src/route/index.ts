import Vue from 'vue'
import Router from 'vue-router'
import { RouteConfig, RouterOptions } from 'vue-router'

Vue.use(Router)
/**
 * @author xll
 * @name meta
 * @param {requireAuth} // 添加用户访问页面的权限 
*/

// 代码分割
// 在 webpack 1 中，可以使用 require.ensure作为实现应用程序的懒加载 
// ES2015 模块加载规范定义了 import() 方法，可以在运行时(runtime)动态地加载 ES2015 模块。
// webpack 将 import() 作为分割点(split-point)并将所要请求的模块(requested module)放置到一个单独的 chunk 中。
// import() 接收模块名作为参数，并返回一个 Promise。
// 如果加载 chunk 失败，我们现在可以进行处理，因为现在它基于 Promise
// network的文件加载使最显著的

let route = (path:string, view:string,boolean?:boolean) => {
  return {
    path: path,
    meta: {
      requireAuth: boolean || true
    },
    component: () => import(`@/${view}/index.ts`)
    .then(module => module)
    .catch(err=>{
      console.log('路由',view)
    })
  }
}

const ROUTER_CONFIG: RouterOptions = {
  base: __dirname,
  mode: 'history',
  routes: [
    route('/','views/Index'),
    route('/about','views/About')
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
}
const router = new Router(ROUTER_CONFIG)
/**
 * 添加路由限制 判断那些页面需要登录权限
 * **/

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (to.meta.requireAuth) {
      next();
    }
  }
  else {
    next();
  }
});
export default router
