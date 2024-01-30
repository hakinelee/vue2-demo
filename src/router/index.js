import Vue from 'vue'
import VueRouter from 'vue-router'
// 1. 创建并引入路由组件
import Home from '../views/pageHome.vue'
import User from '../views/pageUser.vue'
import Main from '../views/pageMain.vue'
import Mall from '../views/pageMall.vue'
import pageOne from '../views/pageOne.vue'
import pageTwo from '../views/pageTwo.vue'

Vue.use(VueRouter)

/**
 * 2. 定义路由：路由与组件 相互映射
 */
const routes = [
  // 主路由
  { 
    path: '/',
    component: Main, 
    redirect: '/home',  //重定向
    children: [
      // 子路由
      { path: 'home', component: Home },      // 首页
      { path: 'user', component: User },      // 用户管理
      { path: 'mall', component: Mall },      // 商品管理
      { path: 'page1', component: pageOne },  // 页面一
      { path: 'page2', component: pageTwo }   // 页面二
    ]
  }
]

/**
 * 3. 创建 router 实例，然后传 `routes` 配置
 */
const router = new VueRouter({
    routes, // (缩写) 相当于 routes: routes
})

/**
 * 4. 对外暴露 Router 实例
 */
export default router
