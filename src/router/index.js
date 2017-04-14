import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '../components/Login'
import Register from '../components/Register'
import Browse from '../components/Browse'
import Vault from '../components/Vault'
import NewVault from '../components/NewVault'
import NewKeep from '../components/NewKeep'
import ActiveKeep from '../components/ActiveKeep'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children: [{
        path: 'login',
        name: 'Login',
        component: Login
      }, {
        path: 'register',
        name: 'Register',
        component: Register
      }]
    },{
      path: '/browse',
      name: 'Browse',
      component: Browse
    },{
      path: '/vaults/:id',
      name: 'Vault',
      component: Vault
    },{
      path: '/vaults',
      name: 'NewVault',
      component: NewVault
    },{
      path: '/keeps',
      name: 'NewKeep',
      component: NewKeep
    },{
      path: '/keeps/:id',
      name: 'ActiveKeep',
      component: ActiveKeep
    }
  ]
})
