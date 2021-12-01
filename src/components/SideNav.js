import React from "react";
import { NavLink } from "react-router-dom";

export function SideNav() {
  function active({ isActive }) {
    return {
      fontWeight: isActive && "bold",
      color: "var(--primary-color)",
      textDecoration: "none",
    };
  }

  return (
    <div className="side-nav">
      <div>
        <NavLink to="/" style={active}>
          Home
        </NavLink>
      </div>
      <div>
        <NavLink to="/product-portfolio" style={active}>
          Products
        </NavLink>
      </div>
      <div>
        <NavLink to="/about" style={active}>
          About
        </NavLink>
      </div>
      <div>
        <NavLink to="/contact" style={active}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}
