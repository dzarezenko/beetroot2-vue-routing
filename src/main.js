import Vue from 'vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'

import Home from "./components/Home";
import User from "./components/User";
import UserDetails from "./components/user/UserDetails";
import UserList from "./components/user/UserList";
import UserEdit from "./components/user/UserEdit";

Vue.config.productionTip = false

Vue.use(VueRouter);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home, name: "home-page" },
    { path: "/user", component: User, children: [
      { path: "", component: UserList },
      { path: ":id", component: UserDetails },
      { path: ":id/edit", component: UserEdit }
    ] },
  ],
});

new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')
