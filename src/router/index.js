import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Main from '../components/main/Main'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: '主页',
    iconCls: 'el-icon-menu',
    children: [
      {
        path: '/',
        name: '主页',
        component: Main
      }
    ]
  }
]

const router = new VueRouter({
  routes // routes: routes 的简写
})

export default router;

