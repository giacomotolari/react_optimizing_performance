import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const items = [
    { name: "Home", to: "/home" },
    { name: "About Us", to: "/about-us" },
    { name: "Contact", to: "/contact" },
    { name: "Blog", to: "/blogs" },
    { name: "Images", to: "/images" },
  ];

  return (
    <nav className="container">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
