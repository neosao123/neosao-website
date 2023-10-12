import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/aboutus.css";
import "../assets/style/Responsiveness.css";
import abtImg from "../assets/images/abt-img.gif";
import shape3 from "../assets/images/shape-3.png";
import star2 from "../assets/images/star-2.png";
import star3 from "../assets/images/star-3.png";
import { FaHandshake, FaBuilding, FaUserCircle, FaBus } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div className="about-bg tnb" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 order-2 order-sm-1 mb-2">
              <div className="abut-img">
                <img src={abtImg} alt="About Us Image" />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 order-1 order-sm-2 mb-2">
              <div className="abut-right">
                <div className="small-heading">
                  <h4>About Us</h4>
                </div>
                <div className="big-heading">
                  <h5>Professional Business Guidance Agency</h5>
                </div>
                <b>
                  "WE ARE CLOSE FAMILY OF TALENTED AND DRIVEN PEOPLE THAT SEVERS
                  TO DELIVER <span>QUALITY</span> AND <span>HONESTY.</span>"
                </b>
                <p>
                  Neosao Services Private Limited is the Most Reliable Custom
                  Software Development Company in India. We are an award-winning
                  custom software development company in India that uses
                  industry best practices to deliver reliable, stable, and
                  scalable software development services for the Mobile-First
                  World. Our software development company has successfully
                  provided more than 100+ custom software solutions to companies
                  using cutting-edge technology.
                </p>
                <Link
                  to="/about-content"
                  className="contact_btn animated fadeInUpShort go"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="star">
          <img src={shape3} alt="Star Shape" />
        </div>
        <div className="star2">
          <img src={star2} alt="Star Shape 2" />
        </div>
        <div className="star3">
          <img src={star3} alt="Star Shape 3" />
        </div>
      </div>

      <div className="section-type tnb">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="section-type-text">
                <div className="icon">
                  <FaHandshake aria-hidden="true" />
                </div>
                <h4>Honesty</h4>
                <p>
                  We communicate honestly, we behave ethically, directly, and
                  trustworthily and align our acts to our commitments.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="section-type-text">
                <div className="icon">
                  <FaBuilding aria-hidden="true" />
                </div>
                <h4>Excellency</h4>
                <p>
                  We provide creative and high-quality solutions that meet or
                  exceed industry requirements and client expectations.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="section-type-text">
                <div className="icon">
                  <FaUserCircle aria-hidden="true" />
                </div>
                <h4>An Individualized Approach</h4>
                <p>
                  We extensively analyze each client's business system and then
                  develop a customized solution as per the client's requirement.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="section-type-text">
                <div className="icon">
                  <FaBus aria-hidden="true" />
                </div>
                <h4>Timely Delivery</h4>
                <p>
                  We offer advanced Technology and low-cost solutions within the
                  prescribed timeframe for a mutually beneficial experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
