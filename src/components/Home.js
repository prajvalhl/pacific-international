import React from "react";
import img1 from "../img/home-img-1.png";
import img2 from "../img/home-img-2.png";
import img3 from "../img/home-img-3.png";
import img4 from "../img/home-img-4.png";
import img5 from "../img/home-img-5.png";

export function Home() {
  return (
    <div className="container home">
      <div className="section-1">
        <p className="sub-title">Precision Sheet Metal Fabrication</p>
        <img src={img1} alt="Amada CNC Turret Punch Press – Vipros 255" />
        <p>
          Pacific International, with over a decade of experience in high
          quality precision sheet metal stamping, fabrication and component
          assembly provides clients across various domains with a plethora of
          specialized precision engineering services in the sheet metal
          fabrication domain.
        </p>
      </div>
      <div className="section-2">
        <p className="sub-title">Sector Specific</p>
        <div className="product-images">
          <img src={img2} alt="product-2" />
          <img src={img3} alt="product-3" />
          <img src={img4} alt="product-4" />
        </div>
        <p>
          Pacific International caters to the sheet metal fabrication
          requirements of clients in the telecom, automotive, aerospace,
          laboratory &#38; medical equipment and lighting domains. We also
          provide value added services to our clientele and ensure that optimal
          quality and precision is maintained during the manufacturing cycle.
        </p>
      </div>
      <div className="section-3">
        <p className="sub-title">Quality Mission</p>
        <img src={img5} alt="quality-stamp" />
        <p>
          The manufacturing processes and raw materials used are constantly
          monitored and reviewed periodically to ensure that every product
          manufactured at Pacific International conform to international quality
          benchmarks and standards. The primary focus is to produce dependable
          quality products that have a longer life duration.
        </p>
      </div>
    </div>
  );
}
