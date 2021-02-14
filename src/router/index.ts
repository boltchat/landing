import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Install from "../views/Install.vue";
import Docs from "../views/Docs.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/install",
    name: "Install",
    component: Install
  },
  {
    path: "/docs",
    name: "Docs",
    component: Docs
  }
];

const router = new VueRouter({
  routes
});

export default router;
