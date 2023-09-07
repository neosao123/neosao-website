import React, { useState } from 'react'
import '../assets/style/header.css'
import '../assets/style/Responsiveness.css'
import logo from '../assets/images/logo-icon.png'
// import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

const Header = () => {
   
 return (
        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-dark new-nav">
                    <a className="logo" href="/neosaoweb">
                        <h2><img src={logo} alt="Logo" /> <span>Neosao</span></h2>
                    </a>
                    <button className="navbar-toggler collapsed">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                   
                
                    <div className="navbar-collapse collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <Link to='home-main' className='custom-link' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                            </li>
                            <li>
                                <Link to='about' className='custom-link' spy={true} smooth={true} offset={50} duration={500}>About </Link>
                            </li>
                            <li>
                                <Link to='services' className='custom-link' spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                            </li>
                            <li>
                                <NavLink to='portfolio' className='custom-link'>Portfolio</NavLink>
                            </li>
                            <li>
                                <Link to='career' className='custom-link' spy={true} smooth={true} offset={2} duration={500}>Career</Link>
                            </li>
                        </ul>
                        <NavLink to='/reach-us-contact' className="contact_btn">Reach us</NavLink>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header