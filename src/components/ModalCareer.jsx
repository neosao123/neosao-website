import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/style/modalcareer.css'

function ModalCareer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='imported-btn' onClick={handleShow} >Apply Now</button>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Fill Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="sendJobform">
                        <div className="form-group">
                            <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" id="phone" name="phone" placeholder="Phone" required />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-xs-12">
                                <select className="form-select" id="candType" name="candType">
                                    <option value="">-- Select --</option>
                                    <option value="Experience">Experience</option>
                                    <option value="Fresher">Fresher</option>
                                </select>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-12">
                                <div className="form-group">
                                    <input type="number" className="form-control" id="expYear" name="expYear" placeholder="Years" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-xs-12">
                                <div className="form-group">
                                    <input type="number" className="form-control" id="expMonth" name="expMonth" placeholder="Months" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="file" className="form-control" id="resume" name="resume" required />
                        </div>
                        <div className="form-group">
                            <textarea id="skills" name="skills" className="form-control" rows="3" placeholder="Skills"></textarea>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleClose}>Submit</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalCareer;