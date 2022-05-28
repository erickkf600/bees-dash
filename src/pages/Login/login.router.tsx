import LazyLoad from "../../routing/lazy-imports";

export const Login = LazyLoad(
    () => import("." /* webpackChunkName: 'login' */)
);
