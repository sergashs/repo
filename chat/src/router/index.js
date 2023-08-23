import { createRouter, createWebHistory } from 'vue-router';

import Default from "@/layouts/Default.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      layout: Default
    }
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
