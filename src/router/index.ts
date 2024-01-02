
import CardsView from '@/views/CardsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'cards',
      component: CardsView
    },
  ]
})

export default router
