import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Main from "../components/Main";

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/main',
        component: Main
      }
    ]
  }
]
const router = new Router({
  mode: 'history',
  routes:routes
})

export default router
