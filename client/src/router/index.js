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
    name: "SignIn",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_In_Page.vue")
  },
  {

    path: "/SignUp",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Sign_Up_Page.vue")
  },

  {
    path: "/AllApplicationsPage",
    name: "AllApplicationsPage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AllApplicationsPage.vue")
  },

  {
    path: "/FAQ",
    name: "FAQ",
    component: () => import("../views/FAQ.vue")
  },
  {
    path: "/UserDashboard",
    name: "UserDashboard",
    component: () => import("../views/UserDashboard.vue")
  },
  {
    path: "/EditProfilePage",
    name: "EditProfilePage",
    component: () => import("../views/EditProfilePage.vue")
  },
  {
    path: "/LiveMap",
    name: "LiveMap",
    component: () => import("../views/LiveMap.vue")
  },
  {
    path: "/*",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
