import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../pages/login/login'
import index from '../pages/index/index'

Vue.use(VueRouter)

const routes = [{
    path:"/login",
    component:login
},{
    path:"/index",
    component:index
}]

const router = new VueRouter({
    routes
})

export default router