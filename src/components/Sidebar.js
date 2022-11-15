import { NavLink, useParams } from "react-router-dom";
import "./css/sidebar.css";

function Sidebar() {
  const handleclick = (e) => {};
  let { category } = useParams();

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES </span>
        <ul className="sidebarList">
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/beauticianList/All"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              All
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/beauticianList/facial"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Facial Treatments
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/beauticianList/hair-care"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Hair Care
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/beauticianList/waxing"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Waxing
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            {/* Neurology */}
            <NavLink
              to="/beauticianList/body-massage"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Body Massage
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/beauticianList/bridal-grooming"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Bridal Grooming
            </NavLink>
          </li>
          <li className="sidebarListItem" onClick={(e) => handleclick(e)}>
            <NavLink
              to="/beauticianList/manicures-pedicures"
              className={({ isActive }) =>
                isActive ? "link-active sidebarItem" : "link sidebarItem "
              }
            >
              Manicures and Pedicures
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
