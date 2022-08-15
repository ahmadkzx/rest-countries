import HomePage from '@/pages/Home'
import CountryPage from '@/pages/Country'
import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage,
    },
    {
      path: '/:code',
      component: CountryPage,
    },
  ],
})
