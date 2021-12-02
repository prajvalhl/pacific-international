import React from "react";
import aboutHero from "../img/about-hero.png";

export function About() {
  return (
    <div className="container">
      <div className="contact-head">
        <img src={aboutHero} alt="" className="contact-hero" />
        <div className="contact-head-text">
          <p>ABOUT</p>
        </div>
      </div>
      <div className="about-body">
        <div>
          <p className="sub-title">Production Facility &#38; Team</p>
          <p>
            The production facility is housed in a spacious 18000 SFT site
            located in the Jigani Industrial Area, Bangalore. The facility is
            manned by a team of experienced personnel with specialized domain
            knowledge in the fields of Engineering, Metal Fabrication,
            Machining, Electroplating &#38; Anodizing and TIG &#38; MIG Welding.
          </p>
        </div>
        <div>
          <p className="sub-title">Plant and Machinery</p>
          <p>
            The production plant is equipped with cutting edge technology, state
            of the art CNC machines to ensure that every project is executed
            efficiently right from the conceptualization stage to the final
            completion. The overall objective at the plant is to streamline the
            manufacturing processes by utilizing technology to produce cost
            efficient products.
          </p>
        </div>
        <div>
          <p className="sub-title">Clientele</p>
          <p>
            At Pacific International we have created long term relationships
            with our clientele based on the tenets of trust, transparency,
            commitment and ability to provide cost effective international
            quality products and solutions that stand the test of time.
          </p>
          <p>Our Existing Clientele</p>
          <ul>
            <li>Royal Enfiled</li>
            <li>Honda Motor Cycle &#38; Scooter India (HMSI)</li>
            <li>Amaraja</li>
            <li>Sansera</li>
            <li>Kia Motors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
