import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Main from '../components/main/Main'
import Article from '../components/article/Article'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
    desc: '主页',
    iconCls: 'el-icon-menu',
    children: [
      {
        path: '/',
        name: 'main',
        desc: '显示首页',
        component: Main
      },
      {
        path: 'article/:id',
        name: 'article',
        desc: '展示的文章',
        component: Article
      }
    ]
  }
]

const router = new VueRouter({
  routes // routes: routes 的简写
})

export default router;

