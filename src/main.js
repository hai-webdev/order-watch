// import "./mock";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import animated from 'animate.css'

Vue.use(animated)

import "./styles/reset.css";
import "lib-flexible";

// 注册全局指令
import vLoading from "./directive/loading/index";
Vue.directive("loading", vLoading);

// 引入api
import api from "@/api";
Vue.prototype.$api = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
