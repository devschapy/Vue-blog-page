import { createRouter, createWebHistory } from "vue-router";
import demoHelper from "../Pages/demoHelper.vue";
import HomePage from "../Pages/HomePage.vue";
import CreatePost from "../Pages/CreatePost.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/demo-helper", name: "demoHelper", component: demoHelper },
    { path: "/", name: "home", component: HomePage },
    { path: "/create/post", name: "CreatePost", component: CreatePost },
  ],
});

export default router;
