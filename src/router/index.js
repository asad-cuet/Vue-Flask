import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import csvAPI from '../views/csvAPI.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/csv-api',
    name: 'api',
    component: csvAPI
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
