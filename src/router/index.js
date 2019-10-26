import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  }
]
const router = new Router({
  mode: 'history',
  routes:routes
})

export default router
