import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import store from '@/store/'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => HomePage,
    meta: {
      layout: 'main',
      authRequired: true,
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

// router.beforeEach((to, from, next) => {
//   if ( !to.meta.authRequired ) return next()

//   if ( to?.meta?.authRequired && store.getters['auth/isAuth'] ) return next()

//   next({ name: 'login' })
// })

export default router;
