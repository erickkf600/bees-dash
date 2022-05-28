import LazyLoad from "../../routing/lazy-imports";

export const Home = LazyLoad(() => import("." /* webpackChunkName: 'home' */));
