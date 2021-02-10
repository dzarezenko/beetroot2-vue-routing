import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

import Home from "./components/Home";
import User from "./components/User";

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/user", component: User }
  ],
});

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
