import Vue from 'vue'
import Router from 'vue-router'
import my from '@/components/my'
import index from '@/components/index'
import messages from '@/components/messages'
import course from '@/components/course'
import activities from '@/components/activities'
import config from '@/components/config'
import afterclass from '@/components/afterclass'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/messages',
      name: 'messages',
      component: messages
    },
    {
      path: '/course',
      name: 'course',
      component: course
    },
    {
      path: '/activities',
      name: 'activities',
      component: activities
    },
    {
      path: '/config',
      name: 'config',
      component: config
    },
    {
      path: '/afterclass',
      name: 'afterclass',
      component: afterclass
    },
    {
      path: '/',
      name: 'login',
      component: login
    }
  ]
})
