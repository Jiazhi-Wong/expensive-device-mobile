import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './vuex/store'
import babelpolyfill from 'babel-polyfill'

// import flexible from '@/assets/js/flexible'
// flexible();

const fastClick = require('fastclick')
fastClick.attach(document.body)

// require('@/assets/scss/base/_cssreset.scss')
// require('@/assets/scss/base/_rem-base-50.scss')

import mock from '@/mock/index'
if (process.env.NODE_ENV !== 'production') {
  mock();
}

router.beforeEach((to, from, next) => {
  document.title = '广工大仪外借系统-' + to.name;
  next()
  // if (store.state.user.isLogin) {
  //   next()
  // } else {
  //   if (to.name === 'login') {
  //     next()
  //   } else {
  //     next({ name: 'login' })
  //   }
  // }
})

export default new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')

//router.replace('/login')

