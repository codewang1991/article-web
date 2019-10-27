import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login";
import MainFrame from "../components/MainFrame";
import List from "../components/List";
import Add from "../components/Add";

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/main',
    component: MainFrame,
    children:[
      {
        path: '/list',
        component: List
      },
      {
        path: '/add',
        component: Add
      }
    ]
  },
  {
    path: '/',
    redirect: '/main'
  }
]
const router = new Router({
  mode: 'history',
  routes:routes
})

export default router
