import Vue from 'vue'
import Router from 'vue-router'
import part1 from './part1'
import part2 from './part2'

const index = () => import('@/pages/index/index')
const nearby = () => import('@/pages/nearby/nearby')
const activity = () => import('@/pages/activity/activity')
const user = () => import('@/pages/user/user')

Vue.use(Router)

var routeslist = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/nearby',
    name: 'nearby',
    component: nearby,
    meta: {
      title: '附近'
    }
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity,
    meta: {
      title: '活动'
    }
  },
  {
    path: '/user',
    name: 'user',
    component: user,
    meta: {
      title: '我的'
    }
  }
]
routeslist = routeslist.concat(part1.list)
routeslist = routeslist.concat(part2.list)

export default new Router({
  // mode: 'history',
  routes: routeslist
})
