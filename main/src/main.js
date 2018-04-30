import Vue from 'vue'
import App from './App.vue'
// import store from './store'

Vue.config.productionTip = false


const div = document.createElement('div');
div.id = 'bilibili-PageList'
document.body.append(div)

new Vue({
  // store,
  render: h => h(App)
}).$mount('#bilibili-PageList')


