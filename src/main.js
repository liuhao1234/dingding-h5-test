import Vue from 'vue'
import router from './router/router'
import store from './vuex/store'
import * as echarts from 'echarts'
import App from './App.vue'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
