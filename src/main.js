import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'
import LoginPage from './components/LoginPage.vue'
import CreatePosts from './components/createPosts'
import CreateComments from './components/createComments'
import DisplayDetails from './components/displayDetails'
Vue.use(VueRouter)
Vue.config.productionTip = false
const routes = [
  { path: '/', component: LoginPage, props: true },
  { path: '/createPosts',name:'createPosts', component: CreatePosts,props: true },
  { path: '/createComments',name:'createComments', component: CreateComments,props: true },
  { path: '/displayDetails',name:'displayDetails', component: DisplayDetails,props: true },
]

const router = new VueRouter({
  routes 
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
