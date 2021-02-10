import Home from "../components/Home";
import User from "../components/User";

import userRoutes from "./user";

export default {
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/home", component: Home, name: "home-page" },
    { path: "/user", component: User, children: userRoutes },
    { path: "/test", redirect: "/" },
    { path: "*", redirect: "/" },
  ],
}
