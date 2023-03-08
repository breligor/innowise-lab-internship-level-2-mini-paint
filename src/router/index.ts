import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/homePage.vue"),
  },
  {path: "/register", name: "Register", component: () => import("../views/registerPage.vue")},
  {path: "/sign-in", name: "Sign In", component: () => import("../views/registerPage.vue")}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
