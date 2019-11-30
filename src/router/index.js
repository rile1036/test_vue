import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Check from '@/components/Check'
import Todo from '@/components/Todo'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/check',
      name: 'Check',
      component: Check
    },*/
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})
