import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/common/Main'
import CustomerCase from '@/components/work/CustomerCase'
import CustomerCaseList from '@/components/work/customer/List'
import CustomerCaseModify from '@/components/work/customer/Modify'
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      meta: {
        notRequiredAuth: true
      },
      component: resolve => require(['../components/common/Login.vue'], resolve)
    },
    {
      path: '/',
      name: 'Main',
      component: Main,
      redirect: '/customer-case/',
      children: [
        {
          path: 'customer-case',
          component: CustomerCase,
          children: [
            {
              path: '',
              name: 'CustomerCaseList',
              component: CustomerCaseList
            },
            {
              path: ':id',
              name: 'CustomerCaseModify',
              component: CustomerCaseModify
            }
          ]
        }
      ]
    }
  ]
})

// 设置路由拦截
// 在vue-router的全局钩子中设置拦截
// 每个路由皆会的钩子函数
// to 进入 from 离开 next 传递
router.beforeEach((to, from, next) => {
  if (to.meta.notRequiredAuth || window.$cookies.get('token') != null) {
    next()
  } else {
    console.log('next')
    next({
      path: '/login',
      query: {
        redirect: to.fullPath
      }
    })
  }
})

export default router
