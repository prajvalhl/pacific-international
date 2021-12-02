import React from "react";
import product1 from "../img/product1.png";
import product2 from "../img/product2.png";
import product3 from "../img/product3.png";

export function Product() {
  return (
    <div className="container product">
      <div className="contact-head">
        <img src={product2} alt="" className="contact-hero" />
        <div className="contact-head-text">
          <p>PRODUCTS</p>
        </div>
      </div>
      <div className="product-images">
        <img src={product1} alt="product-1" />
        <img src={product2} alt="product-2" />
        <img src={product3} alt="product-3" />
      </div>
      <div className="product-description">
        <p>
          Pacific International’s product portfolio encompasses a wide range of
          precision products and customized solutions that cater to specific
          demands across numerous industry sectors.
        </p>
        <ul>
          <li>Aerospace Equipment</li>
          <li>Agricultural Equipment</li>
          <li>Automotive Parts</li>
          <li>Alternative Energy Equipment</li>
          <li>Construction Equipment</li>
          <li>Electrical Control Panels</li>
          <li>Lightning Equipment</li>
          <li>Medical &#38; Laboratory Equipment</li>
          <li>Metal Enclosures &#38; Crates</li>
          <li>Telecommunication Equipment Racks</li>
          <li>Testing Equipment</li>
        </ul>
      </div>
    </div>
  );
}
