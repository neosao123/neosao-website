import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../assets/style/navbar2.css'
import logo from '../assets/images/logo-icon.png'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'

function Navbar2() {
    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="main">
                    <Container fluid>
                        <Navbar.Brand href="/neosaoweb" className='logo'>
                            <h2><img src={logo} alt="Logo" /> <span>Neosao</span></h2>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                {/* COLLAPSE TITLE */}
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <h2><img src={logo} alt="Logo" /> <span>Neosao</span></h2>
                                </Offcanvas.Title>

                            </Offcanvas.Header>

                            <Offcanvas.Body>

                                <Nav className="justify-content-end flex-grow-1 pe-3">

                                    <ul className='navbar-options' >

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


                                    {/* DROPDOWN MENU INBUILT TEMP DISABLE FOR NO USE */}
                                    {/* <NavDropdown

                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>

                                    </NavDropdown> */}

                                </Nav>


                                {/* <Form className="d-flex">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form> */}


                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default Navbar2;