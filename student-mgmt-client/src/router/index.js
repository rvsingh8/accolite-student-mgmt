import Vue from 'vue'
import VueRouter from 'vue-router'
import AddStudent from '../views/AddStudent.vue'
import SearchStudent from '../views/SearchStudent.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/add',
    name: 'Home',
    component: AddStudent
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchStudent
  }
]

const router = new VueRouter({
  routes
})

export default router
