import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home.vue'
import Login from '../pages/login.vue'
import LoginQuick from '../pages/loginquick.vue'
import Retrieval from '../pages/retrieval.vue'
import Register from '../pages/register.vue'
import GenerateBasic from '../pages/generatebasic.vue'
import PurchaseService from '../pages/purchaseservice.vue'
import PayApplication from '../pages/payapplication.vue'
import WaitShelvePay from '../pages/waitshelvepay.vue'
import PayAppSuccess from '../pages/payappsuccess.vue'
import GeneAppImporting from '../pages/geneappimporting.vue'
import MakeIndex from '../pages/make_index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/loginquick',
      name: 'loginquick',
      component: LoginQuick
    },
    {
      path: '/retrieval',
      name: 'retrieval',
      component: Retrieval
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/generatebasic',
      name: 'generatebasic',
      component: GenerateBasic
    },
    {
      path: '/purchaseservice',
      name: 'purchaseservice',
      component: PurchaseService
    },
    {
      path: '/payapplication',
      name: 'payapplication',
      component: PayApplication
    },
    {
      path: '/waitshelvepay',
      name: 'waitshelvepay',
      component: WaitShelvePay
    },
    {
      path: '/geneappimporting',
      name: 'geneappimporting',
      component: GeneAppImporting
    },
    {
      path: '/payappsuccess',
      name: 'payappsuccess',
      component: PayAppSuccess
    },
    {
      path: '/makeindex',
      name: 'makeindex',
      component: MakeIndex
    }
  ]
})
