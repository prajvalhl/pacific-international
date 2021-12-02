import React from "react";
import ContactHero from "../img/contact-hero.png";
import "../styles/contact.css";

export function Contact() {
  return (
    <div className="container contact">
      <div className="contact-head">
        <img src={ContactHero} alt="" className="contact-hero" />
        <div className="contact-head-text">
          <p>CONTACT</p>
        </div>
      </div>
      <div className="contact-body">
        <div className="contact-card">
          <div className="contact-title">
            <div>
              <span className="material-icons">place</span>
            </div>
            <p>ADDRESS</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold" }}>PACIFIC INTERNATIONAL</p>
            <p>
              Plot No. 86-C, Jigani Phase 1, Jigani Industrial Area, Jigani
              Hobali, Anekal Taluk, Bangalore 560 105, Karnataka, India.
            </p>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-title">
            <div>
              <span className="material-icons">phone</span>
            </div>
            <p>TEL</p>
          </div>
          <div>
            <p>Call us:</p>
            <a href="tel:+919845534003">+91 98450 15958</a>
          </div>
        </div>
        <div className="contact-card">
          <div className="contact-title">
            <div>
              <span className="material-icons">email</span>
            </div>
            <p>E-MAIL</p>
          </div>
          <div>
            <p>Mail us:</p>
            <a href="mailto:pacificinternational@gmail.com">
              pacificinternational@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div>
        <iframe
          title="pacific-international-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d477.9636635049085!2d77.62862829770543!3d12.805256052567927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6bc1883ed64f%3A0xc1e8642fe5d3f2ea!2sJigani%20Industrial%20Area%2C%20Karnataka%20560105!5e0!3m2!1sen!2sin!4v1638367320477!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
