import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => HomePage,
    meta: {
      layout: 'main'
    }
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      layout: 'empty'
    }
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("@/views/SignupPage.vue"),
    meta: {
      layout: 'empty'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
