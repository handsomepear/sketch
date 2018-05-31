import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Index' }
    },
    {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/pages/Index'], resolve)
    },
    {
      path: '/result',
      name: 'Result',
      component: resolve => require(['@/pages/Result'], resolve)
    }
  ]
})
