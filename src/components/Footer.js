import React from "react";
import "../styles/footer.css";
import logo from "../img/logo.png";

export function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="pacific-international-logo" className="footer-img" />
      <p>&#169; Pacific International, 2021.</p>
    </div>
  );
}
