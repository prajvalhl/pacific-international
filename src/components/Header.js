import React from "react";
import logo from "../img/logo.png";
import { SideNav } from "./SideNav";
import { NavLink } from "react-router-dom";
import { useNav } from "../nav-context";

export function Header() {
  const { showMenu, setShowMenu } = useNav();

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
        <div className="list-menu">
          <ul className="list-non-bullet">
            <li className="list-item-inline">
              <NavLink to="/" style={active}>
                Home
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/product-portfolio" style={active}>
                Products
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
        <div
          className="ham-menu"
          onClick={() => {
            setShowMenu((prevState) => !prevState);
          }}
        >
          <span className="material-icons">menu</span>
        </div>
        {showMenu && <SideNav />}
      </nav>
    </div>
  );
}
