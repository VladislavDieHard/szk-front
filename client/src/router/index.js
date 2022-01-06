import { createRouter, createWebHistory } from 'vue-router'
import About from '@/pages/desktop/About.vue'
import responsiveRoute from "@/router/modules/device_width";


const routes = [
  {
    path: '/',
    name: 'home',
    component: responsiveRoute({
      // route level code-splitting
      // this generates a separate chunk (login-xs.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      xs: () => import(/* webpackChunkName: "login-xs" */ '@/pages/mobile/NewsMobile.vue'),
      ms: () => import(/* webpackChunkName: "login-xs" */ '@/pages/tablet/NewsTablet.vue'),
      // sm key is missing, it falls back to xs
      lg: () => import(/* webpackChunkName: "login-md" */ '@/pages/desktop/NewsDesktop.vue')
      // lg, xl keys are missing falls back to md
    })
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
