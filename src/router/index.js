import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/main/index'
import Main from '@/components/main/main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/:type',
      component: Main
    }
  ]
})
