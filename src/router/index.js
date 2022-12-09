import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../Pages/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   component: () => import("../Pages/about.vue"),
    // },
  ],
});

export default router;
