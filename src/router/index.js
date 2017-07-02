import Vue from 'vue'
import Router from 'vue-router'
import Actress from '@/pages/Actress'
import Items from '@/pages/Items'
import Search from '@/pages/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Search
    },
    {
      path: '/actress',
      name: 'Actress',
      component: Actress
    },
    {
      path: '/items/:id',
      name: 'Items',
      component: Items
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }

})
