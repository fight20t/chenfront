import Vue from 'vue'
import Router from 'vue-router'
import SearchAndDisplay from '@/views/SearchAndDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SearchAndDisplay
    }
  ]
})