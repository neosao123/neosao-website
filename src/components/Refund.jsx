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

const Refund = () => {
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
                <h5>PRIVACY POLICY<br /><span><Link to='/'> Home </Link> | Privacy</span></h5>
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
              <div className="tnc-text">
                <h2>No Refund Policy for Digital Services</h2>
                <p>Due to the non-returnable nature of digital products/services once they’re delivered/deployed, your refund policy is allowed to state no refunds. An option is to include a limited refund policy, where items/services become non-refundable once they have been accessed or serviced.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Refund