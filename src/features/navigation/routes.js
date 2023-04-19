import { lazy } from "react";
import { Navigate } from "react-router-dom";

// import the components dynamically using React.lazy
const AboutUs = lazy(() => import("../../pages/AboutUs"));
const Contact = lazy(() => import("../../pages/Contact"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFound = lazy(() => import("../../pages/NotFound"));

const routes = [
  { path: "/home", element: <HomePage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact/*", element: <Contact /> },
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/home" /> },
];

export default routes;
