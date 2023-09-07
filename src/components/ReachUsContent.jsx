import React from 'react'
import '../assets/style/reachuscontent.css'
import '../assets/style/Responsiveness.css'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import cloud1 from '../assets/images/cloud1.png'
import parra from '../assets/images/parra-icn.png'
import { FaMapMarkerAlt, FaPhoneVolume, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom'
import InnerHeader from '../components/InnerHeader'

const ReachUsContent = () => {
  return (
    <>
    <InnerHeader/>
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="inner-text">
                <div className="img">
                  <img src={rocket} alt="Rocket" />
                </div>
                <h5>
                  GET IN TOUCH<br />
                  <span>
                    <Link to="/">Home</Link> | Contact Us
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="star">
          <img src={star1} alt="Star 1" />
        </div>
        <div className="star3">
          <img src={star2} alt="Star 2" />
        </div>
        <div className="cloud3">
          <img src={cloud1} alt="Cloud 1" />
        </div>
      </div>


      <div className="inner-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

              <div className="inner-con-right">
                <h3>Get In Touch</h3>
                <h2>We are committed to serve you better..</h2>
                <h4>Kolhapur Branch-</h4>
                <h4>
                  <span><FaMapMarkerAlt /></span> Ayodhya
                  Tower Bulding No.4, Dabholkar Corner, Kolhapur - 416001
                </h4>
                <h4>Pune Branch-</h4>
                <h4>
                  <span><FaMapMarkerAlt /></span>  Flat No.5, 25A/1B, Vaibhav Nagar, Balajinagar, Pune, Maharashtra 411043
                </h4>
                <ul>
                  <li>
                    <span> <FaPhoneVolume /> </span>
                    <a href="tel:2313550197">+91-231 355 0197</a>
                  </li>
                  <li>
                    <span> <FaEnvelope /> </span>
                    <a href="mailto:support@neosao.com">support@neosao.com</a>
                  </li>
                </ul>
                <h3 className="find">Find us on</h3>
                <ul className="social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/NeoSao-Services-PvtLtd-604849376679821"
                      target="_blank">
                      <span> <FaFacebookF /> </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/LtdNeosao" target="_blank">
                      <span> <FaTwitter /> </span>

                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/neosaoservices/"
                      target="_blank">
                      <span> <FaInstagram /> </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/neosao-services-private-limited"
                      target="_blank">
                      <span> <FaLinkedinIn /> </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="parra">
                <img src={parra} alt="Parra Icon" />
              </div>
              <div className="star2">
                <img src={star2} alt="Star 2" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="inner-con-left">
                <h4>Send your Request</h4>
                <form id="sendform">
                  <div className="form-group">
                    <input
                      type="name"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      id="requestDetails"
                      name="requestDetails"
                      className="form-control"
                      rows="4"
                      placeholder="Message*"
                      required
                    ></textarea>
                  </div>
                  <div className="animated fadeInDownShort go" style={{ textAlign: "center" }}>
                    <button type="button" className="btn btn-primary" id="send">
                      Submit
                    </button>
                    {/*<a href="contact.php" className="contact_btn">Submit</a>*/}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 pnm">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15285.90439903605!2d74.24087!3d16.70308!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46ee8141fe417698!2sNeoSao%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1630470855729!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>;
    </>

  )
}

export default ReachUsContent