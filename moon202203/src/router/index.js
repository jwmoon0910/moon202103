import {
  createRouter,
  createWebHistory
} from 'vue-router'
import EventList from '@/views/EventList.vue'
import About from '@/views/About.vue'
import Btc from '@/views/Btc.vue'
import TodoList from '@/views/todo.vue'

const routes = [{
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/eventList',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/btc',
    name: 'Btc',
    component: Btc
  },
  {
    path: '/todo',
    name: 'Todo',
    component: TodoList
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router