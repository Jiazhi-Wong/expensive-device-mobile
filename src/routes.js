import Vue from 'vue'
import Router from 'vue-router'
import main from './pages/Main'
import home from './pages/Home'
import search from './pages/search'
import person from './pages/person'
import personalInfo from './pages/personalInfo'
import historyDevice from './pages/historyDevice'
import deviceDetail from './pages/deviceDetail'
import applyLoan from './pages/applyLoan'
import loanDetail from './pages/loanDetail'
import msgTip from '@/components/msgTip'

import notFound from './pages/404'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: main,
    name: 'main',
    children: [
      {path: '/home', component: home, name: '首页'},
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
  {
    path: '/deviceDetail',
    component: deviceDetail,
    name: '设备详情'
  },
  {
    path: '/applyLoan',
    component: applyLoan,
    name: '申请借用'
  },
  {
    path: '/loanDetail/:loanId',
    component: loanDetail,
    name: '借用详情'
  },
  {
    path: '/msgTip',
    component: msgTip,
    name: '操作提示'
  },
  {path: '*', component: notFound, name: 'NotFound'}
];

export default new Router({
  routes
});
