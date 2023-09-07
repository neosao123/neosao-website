import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/images/logo-icon.png'
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import '../assets/style/header2.css'

function Header2() {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="main-nav">
                    <Container fluid>
                        <Navbar.Brand href="#">
                            <a className="logo" href="/neosaoweb">
                                <h2><img src={logo} alt="Logo" /> <span>Neosao</span></h2>
                            </a>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Offcanvas
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">

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

                                </Nav>

                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Header2;