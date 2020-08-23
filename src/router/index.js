import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Request from "../views/request/Request.vue";
import Payment from "../views/payment/Payment.vue";
import Service from "../views/service/Service.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/request",
    name: "Request",
    component: Request,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
