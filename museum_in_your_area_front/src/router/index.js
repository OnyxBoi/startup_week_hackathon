import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import AdvancedSearch from '../views/AdvancedSearch.vue'
import MapSearch from '../views/MapSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FrontPage
    },
    {
      path: '/advanced-search',
      name: 'advanced-search',
      component: AdvancedSearch
    },
    {
      path: '/map-search',
      name: 'map-search',
      component: MapSearch
    },
  ]
})

export default router
