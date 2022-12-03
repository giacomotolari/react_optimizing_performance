import { Navigate } from "react-router-dom";
import AboutUs from "../../pages/AboutUs";
import Blog from "../../pages/Blog";
import BlogPage from "../../pages/BlogPage";
import Contact from "../../pages/Contact";
import HomePage from "../../pages/HomePage";
import Images from "../../pages/Images";
import NotFound from "../../pages/NotFound";

const routes = [
  { path: "/home", element: <HomePage />, id: 1 },
  { path: "/about-us", element: <AboutUs />, id: 2 },
  { path: "/contact/*", element: <Contact />, id: 3 },
  { path: "*", element: <NotFound />, id: 4 },
  { path: "/", element: <Navigate to="/home" />, id: 5 },
  { path: "/blogs", element: <BlogPage />, id: 6 },
  { path: "/images", element: <Images />, id: 7 },
  { path: "/blogs/:id", element: <Blog />, id: 8 },
];

export default routes;
