import Vue from 'vue'
import Router from 'vue-router'
import main from './pages/main'
import home from './pages/home'
import search from './pages/search'
import person from './pages/person'
import personalInfo from './pages/personalInfo'
import historyDevice from './pages/historyDevice'

import notFound from './pages/404'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: main,
    name: 'main',
    children: [
      {path: '/home', component: home, name: '主页'},
      {path: '/search', component: search, name: '搜索'},
      {path: '/person', component: person, name: '个人中心'},
    ]
  },
  {
    path: '/personalInfo',
    component: personalInfo,
    name: '个人信息'
  },
  {
    path: '/historyDevice',
    component: historyDevice,
    name: '历史借用'
  },
  {path: '*', component: notFound, name: 'NotFound'}
];

export default new Router({
  routes
});
