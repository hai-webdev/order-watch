import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About"),
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("@/views/Message"),
  },
  {
    path: "/android",
    name: "Android",
    meta: {
      scode: 4,
    },
    component: () => import("@/views/List"),
  },
  {
    path: "/ios",
    name: "Ios",
    meta: {
      scode: 5,
    },
    component: () => import("@/views/List"),
  },
  {
    path: "/content/:id",
    name: "Content",
    component: () => import("@/views/Content"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
