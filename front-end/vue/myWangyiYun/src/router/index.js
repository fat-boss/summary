import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require(['../pages/home/index.vue'],resolve),
      redirect: '/test',
      children: [{
        path: 'test',
        name: 'test',
        component: (resolve) => require(['../pages/home/test.vue'],resolve),
      }]
    }
  ]
})
