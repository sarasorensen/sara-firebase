import { createRouter, createWebHistory } from "vue-router";
import NotFound from "./components/pages/NotFound.vue";
import InquiryMessage from "./components/pages/InquiryMessage.vue";

const Home = () => import("./components/pages/Home.vue");
const Plants = () => import("./components/pages/Plants.vue");
const Contact = () => import("./components/pages/Contact.vue");
const UserAuth = () => import("./components/pages/auth/UserAuth.vue");
const Register = () => import("./components/pages/auth/Register.vue");
const Dashboard = () => import("./components/pages/auth/Dashboard.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/plants", name: "Plants", component: Plants },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/auth", name: "UserAuth", component: UserAuth },
    { path: "/register", name: "Register", component: Register },
    { path: "/dashboard", name: "Dashboard", component: Dashboard },
    {
      path: "/inquiryMessage",
      name: "InquiryMessage",
      component: InquiryMessage,
    },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
