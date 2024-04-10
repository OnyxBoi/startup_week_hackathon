import { createRouter, createWebHistory } from 'vue-router'
import FrontPage from '../views/FrontPage.vue'
import AdvancedSearch from '../views/AdvancedSearch.vue'
import MuseumById from '@/views/MuseumById.vue'
// import CreatePost from '../views/CreatePost.vue'

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
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/posts/:id',
    //   name: 'post-detail',
    //   component: PostDetail
    // },
  ]
})

export default router
