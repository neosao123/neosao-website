import React from 'react'
import footerTop from '../assets/images/footer-top.png'
import parraIcon from '../assets/images/parra-icn.png'
import footerLogo from '../assets/images/footer-logo.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import parraIconWhite from '../assets/images/parra-icn-white.png'
import topbtn from '../assets/images/top_button.png'
import '../assets/style/footer.css'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const top = () => (
    window.scrollTo(0, 0)

  );
  return (
    <>
      <div className="top-footer">
        <div>
          <div className="footer-top-img">
            <img src={footerTop} alt="Footer Top" />
            {/* `${base_url()}assets/images/footer-top.png` */}
          </div>
        </div>
        <div className="container">
          <div className="row">

          </div>
        </div>
        <div className="parra">
          <img src={parraIcon} alt="Parra Icon" />
          {/* `${base_url()}assets/images/parra-icn.png` */}
        </div>
        <div className="parra1">
          <img src={parraIcon} alt="Parra Icon 1" />
          {/* `${base_url()}assets/images/parra-icn.png` */}
        </div>
      </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-text">
                <img src={footerLogo} alt="Footer Logo" />
                <p>Neosao Services Private Limited is a software development firm with an impressive track record of creating Web and Android Application solutions to support organizational objectives.</p>

                <ul className="social-icon">
                  <li className='facebook'>
                    <a href="https://www.facebook.com/NeoSao-Services-PvtLtd-604849376679821" target="blank">
                      <span><FaFacebookF /></span>
                    </a>
                  </li>
                  <li className='twitter' >
                    <a href="https://twitter.com/LtdNeosao" target="blank">
                      <span><FaTwitter /></span>
                    </a>
                  </li>
                  <li className='instagram'>
                    <a href="https://www.instagram.com/neosaoservices/" target="blank">
                      <span><FaInstagram /></span>
                    </a>
                  </li>
                  <li className='LinkedIn'>
                    <a href="https://www.linkedin.com/company/neosao-services-private-limited" target="blank">
                      <span><FaLinkedinIn /></span>
                    </a>
                  </li>
                </ul>

              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-text">
                <h4>Services</h4>
                <ul>
                  <li><a href='*'>Web Design &amp; Development</a></li>
                  <li><a href='*'>Mobile App Development</a></li>
                  <li><a href='*'>Application Maintenance &amp; Management</a></li>
                  <li><a href='*'>Digital Marketing</a></li>
                  <li><a href='*'>Graphic Design</a></li>
                  <li><a href='*'>Technology Consulting</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="footer-text">
                <h4>Address</h4>
                <ul>
                  <li> <span><FaMapMarkerAlt /></span>  Ayodhya Tower Bulding No.4, Dabholkar Corner, Kolhapur - 416001</li>
                  <li><span><FaMapMarkerAlt /> </span> Vaibhav Nagar, Balajinagar, Pune, Maharashtra 411043</li>
                  <li><span><FaPhone /></span> +91-231 355 0197 / 7038 31 7038</li>
                  <li><span><FaEnvelope /></span> support@neosao.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="hr"></div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="copy-left">
                <p>© 2019-21 Neosao Services Pvt. Ltd. All rights reserved.</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div className="copy-right">
                <p>
                  <Link to='/privacy' target="_blank">Privacy&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
                  <Link to='/term' target="_blank">Terms&nbsp;&nbsp;|&nbsp;&nbsp;</Link>
                  <Link to='/refund' target="_blank">Refund</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="star">
          <img src={star1} alt="Star 1" />
        </div>
        <div className="star2">
          <img src={star2} alt="Star 2" />
        </div>
        <div className="cricle"></div>
        <div className="cricle1"></div>
        <div className="parra2">
          <img src={parraIconWhite} alt="Parra Icon White" />
        </div>
      </div>


      {/* Back To Top Button */}
      <button onClick={top} id="back-to-top-btn" title="Go to top">
        <img src={topbtn} alt="Back to top" />
      </button>
    </>
  )
}

export default Footer