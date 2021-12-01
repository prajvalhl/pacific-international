import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

export function Header() {
  function active({ isActive }) {
    return {
      fontWeight: isActive && "bold",
      color: "var(--primary-color)",
      textDecoration: "none",
    };
  }

  return (
    <div className="header">
      <nav className="navigation">
        <div>
          <NavLink to="/">
            <img src={logo} alt="pacific-international-logo" className="logo" />
          </NavLink>
        </div>
        <div>
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <NavLink to="/" style={active}>
                Home
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/about" style={active}>
                About
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/contact" style={active}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
