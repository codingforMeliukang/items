import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// 引入根页面
import Home from '@/pages/home/Index.vue'
import Films from '@/pages/films/Index.vue'
import Cinemas from '@/pages/cinemas/Index.vue'
import Shop from '@/pages/shop/Index.vue'
import Mine from '@/pages/mine/Index.vue'
import Card from '@/pages/card/Index.vue'
import Detail from '@/pages/home/detail.vue'

export default new Router({
  routes: [
    {
      path: '/home',
      alias: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/detail/:id',
      name:'detail',
      component:Detail
    },
    {
      path: '/films',
      name: 'films',
      component: Films
    },
    {
      path: '/cinemas',
      name: 'cinemas',
      component: Cinemas
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/card',
      name: 'card',
      component: Card
    }
  ]
})
