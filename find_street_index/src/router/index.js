import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home'),
  },
  {
    path: '/test',
    naem: 'test',
    component: () => import('@/views/Test')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
