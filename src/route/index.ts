import Vue from 'vue'
import Router from 'vue-router'
import { RouteConfig, RouterOptions } from 'vue-router'

Vue.use(Router)

/**
 * @author xll
 * @name meta
 * @param {requireAuth} // 添加用户访问页面的权限 
*/

// ES2015 的代码分割
// import() 接收模块名作为参数，并返回一个 Promise。
// 如果加载 chunk 失败，我们现在可以进行处理，因为现在它基于 Promise
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
