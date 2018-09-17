import Vue from "vue";
import Router from "vue-router";
import Edulight from "./components/edulight.vue";
import About from "./components/about.vue";
import Profile from "./components/profile.vue";
import Staffs from "./components/staffs.vue";
import Testimonials from "./components/testimonials.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "edulight",
      component: Edulight
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/staffs",
      name: "staffs",
      component: Staffs
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials
    }
  ]
});
