import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/SignIn",
    name: "SignIn", //lazy loading
    component: () => import("../views/Sign_In_Page.vue")
  },
  {
    path: "/FAQ",
    name: "FAQ",
    component: () => import("../views/FAQ.vue")
  },
  {
    path: "/LiveMap",
    name: "LiveMap",
    component: () => import("../views/LiveMap.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
