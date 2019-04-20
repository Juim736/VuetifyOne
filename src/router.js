import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Registration from './views/Registration.vue'
import Office from './views/Office.vue'
import Employee from './views/Employee.vue'
import Dashboard from './views/Dashboard.vue'
import Project from './views/Project.vue'
import Team from './views/Team.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta : {
        requireAuth : true
      },
      children: [
        {
          path: '/office',
          name: 'Office',
          component: Office
        },
        {
          path: '/employee',
          name: 'Employee',
          component: Employee
        },
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: '/team',
          name: 'Team',
          component: Team
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path : '/registration',
      name : '/Registration',
      component : Registration
    }
  ]
})
