import React, { useState } from "react";
import logo from "../assets/images/logo-icon.png";
import "../assets/style/offcanvas.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { animateScroll as scroll } from "react-scroll";

function Offcanvas({ external }) {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <>
      <button onClick={toggleOffcanvas} className="navbar-toggler collapsed">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`offcanvas offcanvas-start${isOffcanvasOpen ? " show" : ""}`}
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <a className="logo" href="/neosaoweb">
            <h2>
              <img src={logo} alt="Logo" /> <span>Neosao</span>
            </h2>
          </a>
          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={toggleOffcanvas}
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {external === true ? (
            <>
              {isOffcanvasOpen && (
                <ul className="offcanvas-menu offcanvas-custom-link vertical-menu">
                  <NavLink
                    to="/"
                    className="offcanvas-custom-link"
                    activeClass="active"
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/about-content"
                    className="offcanvas-custom-link"
                    activeClass="active"
                  >
                    ABOUT
                  </NavLink>
                  <NavLink
                    to="/services-contact"
                    className="offcanvas-custom-link"
                    activeClass="active"
                  >
                    SERIVICE
                  </NavLink>
                  <NavLink
                    to="/portfolio"
                    className="offcanvas-custom-link"
                    activeClass="active"
                  >
                    PORTFOLIO
                  </NavLink>
                  <NavLink
                    to="/career-content"
                    className="offcanvas-custom-link"
                    activeClass="active"
                  >
                    CAREER
                  </NavLink>
                  <NavLink
                    to="/reach-us-contact"
                    className="offcanvas-contact_btn"
                    activeClass="active"
                  >
                    Reach us
                  </NavLink>
                </ul>
              )}
            </>
          ) : (
            <>
              {isOffcanvasOpen && (
                <ul className="offcanvas-menu offcanvas-custom-link vertical-menu">
                  <Link
                    to="home-main"
                    className="offcanvas-custom-link"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => {
                      setIsOffcanvasOpen(false);
                      setIsHome(true);
                    }}
                  >
                    HOME
                  </Link>
                  <Link
                    to="about"
                    className="offcanvas-custom-link"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => {
                      setIsOffcanvasOpen(false);
                      setIsHome(true);
                    }}
                  >
                    ABOUT
                  </Link>
                  <Link
                    to="services"
                    className="offcanvas-custom-link"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                    onClick={() => {
                      setIsOffcanvasOpen(false);
                      setIsHome(true);
                    }}
                  >
                    SERVICES
                  </Link>
                  <NavLink to="/portfolio" className="offcanvas-custom-link">
                    PORTFOLIO
                  </NavLink>
                  <Link
                    to="career"
                    className="offcanvas-custom-link"
                    spy={true}
                    smooth={true}
                    offset={2}
                    duration={500}
                    onClick={() => {
                      setIsOffcanvasOpen(false);
                      setIsHome(true);
                    }}
                  >
                    CAREER
                  </Link>
                  <NavLink
                    to="/reach-us-contact"
                    className="offcanvas-contact_btn"
                  >
                    Reach us
                  </NavLink>
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
export default Offcanvas;
