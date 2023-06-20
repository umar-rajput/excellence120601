import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PollView from '../views/PollView.vue'
import AllPollsUserView from '../views/AllPollsUserView'
// import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
    path:'/poll',
    name:'poll',
    component: PollView,
    meta:{
      isLoggedIn:true
    }
  },
  {
    path:'/all-polls-user',
    name:'AllPollsUserView',
    component:AllPollsUserView,
    meta:{
      isLoggedIn:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to)=>{
  // let token=await store.getters.getAllUserDetails
  let token=localStorage.getItem("token");
  console.log("token...",token);
  // console.log(!token);
  // console.log(to.meta.isLoggedIn && token);
  if(to.meta.isLoggedIn && !token){
    // console.log(token);
    return (
      alert("Please login first"),
      {name:'home'}
    )
  } 
})

export default router
