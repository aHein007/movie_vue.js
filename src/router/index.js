import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailPage from "../views/DetailPage.vue"
import CreateMovie from "../views/CreateMovie.vue"
import WelcomePage from "../views/WelcomePage.vue"
import { auth } from '../firebase/config'


const routes = [
  {
    path: '/', 
    name: 'home',
    component: HomeView,
    beforeEnter(to,from,next){
      let user =auth.currentUser
      if(user){
        next()
      }else{
        next({name:"welcomePage"})
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

  {
    path:"/welcomePage",
    name:"welcomePage",
    component:WelcomePage,

    beforeEnter(to,from,next){
      let user =auth.currentUser
      if(!user){
        next()
      }else{
        next({name:"home"})
      }
    }

  },

  {
    path:"/detailPage/:id",
    name:"detailPage",
    component:DetailPage,
    props:true
  },

  {
    path:"/createMovie",
    name:"createMovie",
    component:CreateMovie
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
