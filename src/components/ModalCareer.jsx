import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/style/modalcareer.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';

function ModalCareer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("First name is required")
            .matches(
                /^[A-Za-z\s]+$/,
                "First name should only contain alphabetic characters and spaces"
            )
            .min(3, "First name must be at least 3 characters")
            .max(50, "First name cannot be longer than 50 characters"),

        email: Yup.string()
            .email('Invalid email')
            .required('Email is required'),

        phone: Yup.string()
            .matches(
                /^[+]?[0-9]{1,4}[\s.-]?[0-9]{1,15}$/,
                'Please enter a valid phone number'
            )
            .required('Phone is required'),

        candType: Yup.string()
            .required('Candidate type is required'),

        resume: Yup.mixed()
            .test(
                'is-file-format',
                'Resume must be in DOCX or PDF format',
                (value) => {
                    if (!value) return true; // Empty value is allowed
                    const allowedFormats = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
                    return allowedFormats.includes(value.type);
                }
            )
            .required('Resume is required'),

        skills: Yup.string()
            .required('Skills are required')
            .matches(
                /^[A-Za-z\s,]+$/,
                'Skills should only contain alphabetic characters, spaces, and commas'
            ),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            candType: '',
            resume: null, // Initialize with null for file upload
            skills: '',
        },
        validationSchema,
        onSubmit: (values) => {
            // Handle form submission here
            console.log(values);
            handleClose();
        },
    });

    return (
        <>
            <>
                <button className='imported-btn' onClick={handleShow}>Apply Now</button>

                <Modal className='full-form' show={show} onHide={handleClose} centered>
                    <Modal.Header className='header' closeButton>
                        <Modal.Title className='title' >Fill Information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form id="sendJobform" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control custom-input"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="error">{formik.errors.name}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control custom-input"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="error">{formik.errors.email}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="tel"
                                    className="form-control custom-input"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <div className="error">{formik.errors.phone}</div>
                                )}
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-xs-12">
                                    <select
                                        className="form-select"
                                        id="candType"
                                        name="candType"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.candType}
                                    >
                                        <option value="">-- Select --</option>
                                        <option value="Experience">Experience</option>
                                        <option value="Fresher">Fresher</option>
                                    </select>
                                    {formik.touched.candType && formik.errors.candType && (
                                        <div className="error">{formik.errors.candType}</div>
                                    )}
                                </div>

                                <div className="col-lg-3 col-md-3 col-xs-12">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control custom-input"
                                            id="expYear"
                                            name="expYear"
                                            placeholder="Years"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expYear}
                                        />
                                        {formik.touched.expYear && formik.errors.expYear && (
                                            <div className="error">{formik.errors.expYear}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-xs-12">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className="form-control custom-input"
                                            id="expMonth"
                                            name="expMonth"
                                            placeholder="Months"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expMonth}
                                        />
                                        {formik.touched.expMonth && formik.errors.expMonth && (
                                            <div className="error">{formik.errors.expMonth}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="file"
                                    className="form-control custom-input"
                                    id="resume"
                                    name="resume"
                                    onChange={(event) =>
                                        formik.setFieldValue('resume', event.currentTarget.files[0])
                                    }
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.resume && formik.errors.resume && (
                                    <div className="error">{formik.errors.resume}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <textarea
                                    id="skills"
                                    name="skills"
                                    className="form-control custom-input"
                                    rows="3"
                                    placeholder="Skills"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.skills}
                                ></textarea>
                                {formik.touched.skills && formik.errors.skills && (
                                    <div className="error">{formik.errors.skills}</div>
                                )}
                            </div>
                        </form>
                    </Modal.Body>


                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='submit-btn' variant="primary" onClick={formik.handleSubmit}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    );
}

export default ModalCareer;