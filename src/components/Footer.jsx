import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon">
          <li className="social-icon__item">
            <NavLink className="social-icon__link" to="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </NavLink>
          </li>
          <li className="social-icon__item">
            <NavLink className="social-icon__link" to="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </NavLink>
          </li>
          <li className="social-icon__item">
            <NavLink className="social-icon__link" to="#">
              <ion-icon name="logo-linkedin"></ion-icon>
            </NavLink>
          </li>
          <li className="social-icon__item">
            <NavLink className="social-icon__link" to="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </NavLink>
          </li>
        </ul>
        <ul className="menu">
          <li className="menu__item">
            <NavLink className="menu__link" to="/">
              Home
            </NavLink>
          </li>

          <li className="menu__item">
            <NavLink className="menu__link" to="/teams">
              Team
            </NavLink>
          </li>
          <li className="menu__item">
            <NavLink className="menu__link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <p>&copy;UPES Blog Mania 2024 | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Footer;
