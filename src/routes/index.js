// Example content of router.js
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
// import YourComponent from './YourComponent.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
  // Other routes...  
]
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes,
})



export default router