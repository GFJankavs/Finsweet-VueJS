import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Features from "@/views/Features.vue";
import Pricing from "@/views/Pricing.vue";
import FAQ from "@/views/FAQ.vue";
import Blog from "@/views/Blog.vue";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About Us",
    component: About,
  },
  {
    path: "/features",
    name: "Features",
    component: Features,
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
