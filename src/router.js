import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Docks from './components/Docks.vue'
import DocksDist from './components/DocksDist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/d/:stid',
      name: 'docks',
      component: Docks
    },
    {
      path: '/x/:k/:lat/:lon',
      name: 'x',
      component: DocksDist
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
