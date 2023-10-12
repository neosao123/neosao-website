import React from "react";
import logo from "../assets/images/logo-icon.png";
import "../assets/style/header.css";
import { Link, NavLink } from "react-router-dom";
import Offcanvas from "./Offcanvas";

const InnerHeader = () => {
  return (
    <div>
      <header>
        <div className="main-nav">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark new-nav">
              <a className="logo" href="/neosaoweb">
                <h2>
                  <img src={logo} alt="Logo" /> <span>Neosao</span>
                </h2>
              </a>

              {/* <button className="navbar-toggler collapsed" onClick={openNav}>
                <span className="navbar-toggler-icon"></span>
              </button> */}

              {/* {isSidepanelOpen && (
                <div id="mySidepanel" className="sidepanel">
                  <a href="/" className="closebtn" onClick={closeNav}>
                    ×
                  </a>
                  <Link to="/">Home</Link>
                  <Link to="/about" onClick={closeNav}>
                    About Us
                  </Link>
                  <Link to="/services" onClick={closeNav}>
                    Services
                  </Link>
                  <Link to="/portfolio">Portfolio</Link>
                  <Link to="/career">Career</Link>
                  <Link to="/reach-us-contact">Reach us</Link>
                </div>
              )} */}

              <Offcanvas external={true} />

              <div className="navbar-collapse collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li>
                    <NavLink to="/" className="custom-link">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about-content" className="custom-link">
                      About{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/services-contact" className="custom-link">
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolio" className="custom-link">
                      Portfolio
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/career-content" className="custom-link">
                      Career
                    </NavLink>
                  </li>
                </ul>
                <NavLink to="/reach-us-contact" className="contact_btn">
                  Reach us
                </NavLink>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default InnerHeader;
