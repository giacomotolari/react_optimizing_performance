import { Navigate } from "react-router-dom";
import { lazy } from "react";
const AboutUs = lazy(() => import("../../pages/AboutUs"));
const Blog = lazy(() => import("../../pages/Blog"));
const BlogPage = lazy(() => import("../../pages/BlogPage"));
const Contact = lazy(() => import("../../pages/Contact"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFound = lazy(() => import("../../pages/NotFound"));
const Images = lazy(() => import("../../pages/Images"));

const routes = [
  { path: "/home", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUs />, id: 2 },
  { path: "/contact/*", element: <Contact />, id: 3 },
  { path: "*", element: <NotFound />, id: 4 },
  { path: "/", element: <Navigate to="/home" />, id: 5 },
  { path: "/blogs", element: <BlogPage />, id: 6 },
  { path: "/images/:cityName", element: <Images />, id: 7 },
  { path: "/blogs/:id", element: <Blog />, id: 8 },
];

export default routes;
