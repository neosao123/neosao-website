
import React, { useState } from 'react';
import logo from '../assets/images/logo-icon.png'
import '../assets/style/offcanvas.css'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll'

function Offcanvas() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <>
            <button onClick={toggleOffcanvas} className="navbar-toggler collapsed">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`offcanvas offcanvas-end${isOffcanvasOpen ? ' show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <a className="logo" href="/neosaoweb">
                        <h2><img src={logo} alt="Logo" /> <span>Neosao</span></h2>
                    </a>
                    <button type="button" className="btn-close" onClick={toggleOffcanvas} aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {isOffcanvasOpen && (
                        <ul className='offcanvas-menu offcanvas-custom-link vertical-menu'>
                            <Link to='home-main' className='offcanvas-custom-link' spy={true} smooth={true} offset={-100} duration={500}>HOME</Link>
                            <Link to='about' className='offcanvas-custom-link' spy={true} smooth={true} offset={50} duration={500}>ABOUT</Link>
                            <Link to='services' className='offcanvas-custom-link' spy={true} smooth={true} offset={50} duration={500}>SERVICES</Link>
                            <NavLink to='/portfolio' className='offcanvas-custom-link'>PORTFOLIO</NavLink>
                            <Link to='career' className='offcanvas-custom-link' spy={true} smooth={true} offset={2} duration={500}>CAREER</Link>
                            <NavLink to='/reach-us-contact' className="offcanvas-contact_btn">Reach us</NavLink>
                        </ul>

                    )}
                </div>
            </div>
        </>

    );
}
export default Offcanvas;
