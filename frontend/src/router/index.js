import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import CreateUser from '../views/CreateUser.vue'
import Dashboard from '../views/Dashboard.vue'
import ModalViewTask from '../components/ModalViewTask'
import ModalNewTask from '../components/ModalNewTask'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/createuser',
    name: 'createuser',
    component: CreateUser
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/modalviewtask/:id',
    name: 'modalviewtask',
    component: ModalViewTask
  },
  {
    path: '/modalnewtask',
    name: 'modalnewtask',
    component: ModalNewTask
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
