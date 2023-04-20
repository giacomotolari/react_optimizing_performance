import { Navigate } from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import Contact from "../../pages/Contact";
import HomePage from "../../pages/HomePage";
import NotFound from "../../pages/NotFound";

const routes = [
  { path: "/home", element: <HomePage /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> },
  { path: "/", element: <Navigate to="/home" /> },
];

export default routes;
