import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Dorm from "@/views/Dorm.vue";
import AddReview from "@/views/AddReview.vue";

const routes = [
  {
    path: "/home",
    name: "Home2",
    component: Home,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: 'About',
    component: About
  },
  {
    path: "/:dormName",
    name: 'dorm-view',
    component: Dorm
  },
  {
    path: "/:dormName/add-review",
    name: 'add-review',
    component: AddReview 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;