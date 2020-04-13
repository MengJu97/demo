import Vue from 'vue'
import App from './App.vue'/*导入了App.vue组件*/

import axios from 'axios';
import VueAxios from "vue-axios";

import content from "./components/content";
import footer from "./components/footer";

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import {routes} from "./routers";//引入静态路由表

const router = new VueRouter({
  routes:routes
})

/*全局注册*/
Vue.component('Content1',content);
Vue.component('Footer',footer);
Vue.use(VueAxios,axios);

new Vue({
  el: '#app',/*绑定div*/
  render: h => h(App),/*让App.vue的内容展现在该div中*/
  router
});
