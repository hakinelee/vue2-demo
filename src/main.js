import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
//引入初始化样式
import "./assets/css/reset.css"

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  router, // 路由挂载
  store,
  render: h => h(App),
}).$mount('#app')
