// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VRouter from "vue-router"
import bey from "./components/bey"

Vue.use(VRouter);

Vue.config.productionTip = false

let router = new VRouter({
  routes:[
    {
      path:"/exit",
      component:bey
    },
  ],
  
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App></app>',
  components: { App }
})
