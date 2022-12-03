import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <aside>
      <ul className="nested">
        <li>
          <NavLink to="dashboard">dashboard</NavLink>
        </li>
        <li>
          <NavLink to="download">download</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
