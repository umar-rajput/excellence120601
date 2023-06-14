import { createStore } from 'vuex'
import signUp from './modules/signUp'
import poll from './modules/poll'

export default createStore({
  // state: {
  // },
  // getters: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
  modules:{
    signUp,
    poll
  }
})
