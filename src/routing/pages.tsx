import { Routes } from "../interfaces/routes.interface";
import { Home } from "../pages/Home/home.router";
import { Login } from "../pages/Login/login.router";

export const Pages: Routes[] = [
    {
        title: "Home",
        route: "/home",
        component: Home,
    },
    {
        title: "Login",
        route: "/login",
        component: Login,
    },
];
