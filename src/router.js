import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectDetails from "./pages/ProjectDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/details/:id",
      name: "project-details",
      component: ProjectDetails,
    },
  ],
});

export { router };
