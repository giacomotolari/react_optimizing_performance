import { /*useNavigate,*/ NavLink } from "react-router-dom";
// import { useState } from "react";

const Navbar = () => {
  // const [city, setCity] = useState("");
  // const navigate = useNavigate();

  const items = [
    { name: "Home", to: "/home" },
    { name: "About Us", to: "/about-us" },
    { name: "Contact", to: "/contact" },
    { name: "Blog", to: "/blogs" },
  ];

  return (
    <nav id="Navbar">
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink to={item.to}>{item.name}</NavLink>
            </li>
          );
        })}
        {/* <li>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            disabled={city.length === 0}
            onClick={() => navigate(`/images/${city}`)}
          >
            Search
          </button>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
