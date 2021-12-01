import React from "react";
import { NavLink } from "react-router-dom";
import { useNav } from "../nav-context";

export function SideNav() {
  const { setShowMenu } = useNav();

  function active({ isActive }) {
    return {
      fontWeight: isActive && "bold",
      color: "var(--primary-color)",
      textDecoration: "none",
    };
  }

  function hideSideNavBar() {
    setShowMenu(false);
  }

  return (
    <div className="side-nav">
      <div>
        <NavLink to="/" style={active} onClick={hideSideNavBar}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/product-portfolio"
          style={active}
          onClick={hideSideNavBar}
        >
          Products
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" style={active} onClick={hideSideNavBar}>
          About
        </NavLink>
      </div>
      <div>
        <NavLink to="/contact" style={active} onClick={hideSideNavBar}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}
