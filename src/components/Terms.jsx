import React from 'react'
import '../assets/style/policy.css'
import '../assets/style/Responsiveness.css'
import { Link } from 'react-router-dom'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import cloud1 from '../assets/images/cloud1.png'

// MANUAL
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo-icon.png'
import Offcanvas from './Offcanvas'

const Terms = () => {
  return (
    <>
      {/* NAVBAR */}
      <div className="main-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-dark new-nav">
            <a className="logo" href="/neosaoweb">
              <h2><img src={logo} alt="Logo" /> <span>Neosao</span></h2>
            </a>

            <Offcanvas />


            {/* OFFCANVAS BOOTSTRAP */}


            {/* OFFCANVAS END */}

            <div className="navbar-collapse collapse" id="navbarCollapse">
              <ul className="navbar-nav ml-auto">
                <li>
                  <Link to='/' className='custom-link' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                </li>
                <li>
                  <Link to='/about-content' className='custom-link' spy={true} smooth={true} offset={50} duration={500}>About </Link>
                </li>
                <li>
                  <Link to='/services-contact' className='custom-link' spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                </li>
                <li>
                  <NavLink to='/portfolio' className='custom-link'>Portfolio</NavLink>
                </li>
                <li>
                  <Link to='/career-content' className='custom-link' spy={true} smooth={true} offset={2} duration={500}>Career</Link>
                </li>
              </ul>
              <NavLink to='/reach-us-contact' className="contact_btn">Reach us</NavLink>
            </div>
          </nav>
        </div>
      </div>
      {/* NAVBAR END */}

      
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="inner-text">
                <div className="img">
                  <img src={rocket} alt="Rocket" />
                </div>
                <h5>
                  Terms and Conditions<br />
                  <span>
                    <Link to='/' > Home </Link> | Terms
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


      <div className="mnp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mnp">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div className="tnc-text">
                        <h2>Terms of Use for Neosao Services Pvt. Ltd., Services</h2>
                        <p>The following terms and conditions (“Terms and Conditions”) govern your use of this, the web service neosao.com any other web service or site owned and/or operated by Neosao Services Pvt. Ltd. (the “Service”), and by accessing, viewing, or using the material and functionality on the Service, you indicate that you understand and intend these Terms and Conditions to be the legal equivalent of a signed, written contract, and equally binding, and that you accept such Terms and Conditions and agree to be legally bound by them. If you do not agree with the Terms and Conditions, you are not granted permission to use the Service and should exit immediately.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Proprietary Rights.</strong> All material contained in this Service is protected by law, including, but not limited to, Indian copyright law. Except as indicated, the entire content (including https://neosao.com/assets/images, text, and look and feel attributes) of neosao.com. All rights reserved. Removing or altering the copyright notice on any material on the Service is prohibited. Neosao Services Pvt. Ltd. also owns a copyright in this Service as a collective work and/or compilation, and in the selection, coordination, arrangement, organization, and enhancement of such content. Any commercial use of this content is prohibited without the prior written consent of Neosao Services Pvt. Ltd. All trademarks used at this web-site that are not the intellectual property of Neosao Services Pvt. Ltd. are property of their respective holders.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Communications With Our Web Service.</strong> Neosao Services Pvt. Ltd. welcomes your feedback and suggestions about how to improve our products and services and this Service. By transmitting any suggestions, information, material, or other content (collectively, “content”) to Neosao Services Pvt. Ltd., you automatically grant Neosao Services Pvt. Ltd. the royalty-free, perpetual, irrevocable, non-exclusive right and license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, redistribute, transmit, perform, and display such content (in whole or part) worldwide and/or to incorporate it in other works in any form, media, or technology now known or later developed for the full term of any rights that may exist in such content. Further, Neosao Services Pvt. Ltd. is free to use any ideas, concepts, know-how, techniques, and suggestions contained in any communications you send to this Service for any purpose whatever, including but not limited to creating and marketing products and/or services using such information.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>No Solicitation or Offer or Advice.</strong> This Service is designed to provide general information about Neosao Services Pvt. Ltd. and its products and services. Information on the Service is not intended to constitute an offer to sell or a solicitation of any particular product or service.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Privacy Statement.</strong> Neosao Services Pvt. Ltd. has a Privacy Statement disclosing what information we collect about visitors, how we use such information and the steps we take to secure such information. Click here to view the Privacy Statement, which is incorporated by reference, as if set forth fully herein.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Disclaimer of Warranty and Liability.</strong>Use of this service is entirely at your own risk. Neither Neosao Services Pvt. Ltd. nor its affiliates are responsible for the consequences of reliance on any information contained in or submitted to the service, and the risk of injury from the foregoing rests entirely with you. These materials are provided “as is” without warranty of any kind, either express or implied. Neosao Services Pvt. Ltd. shall not be liable for any direct, special, indirect, incidental, consequential, or punitive damages, including without limitation, lost revenues or lost profits, which may result from the use of, access to, or inability to use these materials. Under no circumstances will the total liability of Neosao Services Pvt. Ltd. to you exceed the price paid for use of the service.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Corrections and Changes.</strong>While we endeavor to keep these materials up to date, Neosao Services Pvt. Ltd. cannot assume responsibility for any errors or omissions in these materials. Neosao Services Pvt. Ltd. further does not warrant the accuracy or completeness of the information, text, graphics, links or other items contained within these materials. Neosao Services Pvt. Ltd. may make changes to these materials, or to the products or services described herein, at any time without notice, and makes no commitment to update the information contained herein. Neosao Services Pvt. Ltd. reserves the right to terminate your access to the Service in the event that you violate these Terms and Conditions, or for any reason whatever.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Indemnification.</strong> You agree to defend, indemnify, and hold harmless Neosao Services Pvt. Ltd., its affiliates and subsidiaries, and all of their respective directors, officers, employees, representatives, proprietors, partners, shareholders, servants, principals, agents, predecessors, successors, assigns, and attorneys from and against any and all claims, proceedings, damages, injuries, liabilities, losses, costs, and expenses (including attorney’s fees and litigation expenses) relating to or arising from your use of the Service and any breach by you of these Terms and Conditions.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Links to Other Web Services.</strong> This Service may, from time to time, contain links to other Internet web services for the convenience of users in locating one of our clients’ services, information, or services that may be of interest. These services are maintained by organizations over which Neosao Services Pvt. Ltd. exercises no control, and Neosao Services Pvt. Ltd. expressly disclaims any responsibility for the content, the accuracy of the information and/or quality of products or services provided by or advertised on these third-party services. Neosao Services Pvt. Ltd. does not control, endorse, promote, or have any affiliation with any other web service unless expressly stated herein.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Use of the Internet.</strong> Use of the Internet is solely at your own risk and is subject to all applicable provincial, national and international laws and regulations. Neither Neosao Services Pvt. Ltd. nor its affiliates will be liable for any loss resulting from a cause over which they do not have direct control, including but not limited to failure of electronic or mechanical equipment or communication lines, telephone or other interconnection problems, computer viruses, unauthorized access, theft, operator errors, severe weather, earthquakes, natural disasters, strikes or other labor problems, wars, or governmental restrictions.</p><br />

                        <p><strong> <i className="fa fa-circle" aria-hidden="true"></i>Governing Law and Jurisdiction.</strong> These Terms and Conditions will be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without reference to its choice of law rules. By accessing, viewing, or using the material on the Service, you consent to the jurisdiction of the federal and provincial courts presiding in Toronto, Ontario, and agree to accept service of process by mail and hereby waive any and all jurisdictional and venue defenses otherwise available. This Service is controlled and operated by Neosao Services Pvt. Ltd. from its offices within Canada. Neosao Services Pvt. Ltd. makes no representation that materials in the Service are appropriate or available for use in other locations, and access to them from territories where their contents are illegal is prohibited. Those who choose to access this Service from other locations do so of their own volition and are responsible for compliance with applicable local laws.</p>

                        <p>These Terms and Conditions constitute the entire agreement between you and Neosao Services Pvt. Ltd. with respect to your use of the Service. You acknowledge that, in providing you access to and use of the Service, Neosao Services Pvt. Ltd. has relied on your agreement to be legally bound by these Terms and Conditions.</p><br />

                        <h2>Contact Information</h2>
                        <p>Neosao Services Pvt. Ltd. welcomes your comments regarding this Terms of Use, please contact us by e-mail, or Contact number.</p>
                        <p><strong>Neosao Services Pvt. Ltd.</strong><br />
                          <i className="fa fa-map-marker" aria-hidden="true"></i> Ayodhya Tower Bulding No.4, <br />
                          Dabholkar Corner, Kolhapur - 416001<br />
                          Maharashtra, India.<br />
                          <i className="fa fa-volume-control-phone" aria-hidden="true"></i> +91-231 355 0197<br />
                          <i className="fa fa-envelope-o" aria-hidden="true"></i> support@neosao.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Terms