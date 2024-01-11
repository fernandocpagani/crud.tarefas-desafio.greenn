import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import CreateUser from '../views/CreateUser.vue'
import Dashboard from '../views/Dashboard.vue'
import ModalNewTask from '../components/ModalNewTask'
import ModalViewTask from '../components/ModalViewTask'
import UpdateTask from '../components/UpdateTask'
import UpdateDate from '../components/UpdateDate'
import ModalNewSubTask from '../components/ModalNewSubTask'
import UpdateSubTask from '../components/UpdateSubTask'

Vue.use(VueRouter)

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
    path: '/modalnewtask',
    name: 'modalnewtask',
    component: ModalNewTask
  },
  {
    path: '/modalviewtask/:id',
    name: 'modalviewtask',
    component: ModalViewTask
  },
  {
    path: '/updatetask/:id',
    name: 'updatetask',
    component: UpdateTask
  },
  {
    path: '/updatedate/:id',
    name: 'updatedate',
    component: UpdateDate
  },
  {
    path: '/modalnewsubtask/:id',
    name: 'modalnewsubtask',
    component: ModalNewSubTask
  },
  {
    path: '/updatesubtask/:id',
    name: 'updatesubtask',
    component: UpdateSubTask
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
