import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import Actress from '@/pages/Actress'
import Item from '@/pages/Item'
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
      path: '/item',
      name: 'Item',
      component: Item
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
