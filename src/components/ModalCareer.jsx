import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../assets/style/modalcareer.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling



function ModalCareer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            .matches(
                /^[A-Za-z\s]+$/,
                "Name should only contain alphabetic characters and spaces"
            )
            .min(3, "Name must be at least 3 characters")
            .max(50, "Name cannot be longer than 50 characters"),

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

        expYear: Yup.number()
            .typeError("Years must be a number")
            .integer("Years must be an integer")
            .min(0, "Years cannot be negative"),

        expMonth: Yup.number()
            .typeError("Months must be a number")
            .integer("Months must be an integer")
            .min(0, "Months cannot be negative"),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            candType: '',
            resume: null, // Initialize it with null
            skills: '',
            expYear: '',
            expMonth: '',
        },

        validationSchema,
        //   GPT

        onSubmit: async (values, { resetForm }) => {
            try {
                // Send the email using emailjs
                let formData = new FormData(); // Use "FormData" with a capital "D"
                formData.append("name", values.name);
                formData.append("email", values.email);
                formData.append("phone", values.phone);
                formData.append("candType", values.candType);
                formData.append("expYear", values.expYear);
                formData.append("expMonth", values.expMonth);
                formData.append("skills", values.skills);

                // Append the resume file to the FormData object
                formData.append("resumeFile", values.resume);

                const emailParams = {
                    to_name: 'Shubham', // Replace with the recipient's name
                    from_name: 'NeoSao Services Pvt. Ltd.', // Replace with your company name
                    formData: {
                        name: values.name,
                        email: values.email,
                        phone: values.phone,
                        candType: values.candType,
                        expYear: values.expYear,
                        expMonth: values.expMonth,
                        skills: values.skills,
                    },
                };

                // Attach the resume file to the email
                const resumeFile = values.resume;
                if (resumeFile) {
                    emailParams.resume = resumeFile;
                }

                // Replace 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', and 'YOUR_USER_ID' with your actual values
                await emailjs.send('service_0k7o6xi', 'template_wo6ek1k', emailParams, 'W0XpjwDO-srhytALL');

                // TOAST_SUCCESS
                // Show a success toast notification
                toast.success('Email sent successfully', {
                    position: "top-right",
                    autoClose: 3000,
                });
                // TOAST_END

                // Handle form submission here (e.g., show success message)
                console.log('Email sent successfully');
                handleClose();

                // Reset the form after successful submission
                resetForm();
            } catch (error) {
                // Show an error toast notification if the email sending fails
                toast.error('Email sending error', {
                    position: "top-right",
                    autoClose: 3000,
                });
                console.error('Email sending error:', error);
            }
        },




        // GPT_END
    });

    const handleInputChange = (fieldName, inputValue) => {
        let regexPattern = /^[A-Za-z\s]+$/; // Default pattern for alphabetic characters and spaces

        if (fieldName === 'phone') {
            regexPattern = /^[0-9]+$/; // Pattern for numeric characters only
        } else if (fieldName === 'expYear' || fieldName === 'expMonth') {
            regexPattern = /^[0-9]*$/; // Pattern for numeric characters (allowing empty string)
        }

        if (regexPattern.test(inputValue) || inputValue === '') {
            formik.handleChange({ target: { name: fieldName, value: inputValue } });
        }
    };

    return (
        <>
            <>
                <button className='imported-btn' onClick={handleShow}>Apply Now</button>

                <Modal className='full-form' show={show} onHide={handleClose} centered>
                    <Modal.Header className='header' closeButton>
                        <Modal.Title className='title' >Fill Information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form id="sendJobform" onSubmit={formik.handleSubmit} enctype="multipart/form-data">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className={`form-control custom-input ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <div className="invalid-feedback">{formik.errors.name}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="email"
                                    className={`form-control custom-input ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <div className="invalid-feedback">{formik.errors.email}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <input
                                    type="tel"
                                    className={`form-control custom-input ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.touched.phone && formik.errors.phone && (
                                    <div className="invalid-feedback">{formik.errors.phone}</div>
                                )}
                            </div>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-xs-12">
                                    <select
                                        className={`form-select ${formik.touched.candType && formik.errors.candType ? 'is-invalid' : ''}`}
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
                                        <div className="invalid-feedback">{formik.errors.candType}</div>
                                    )}
                                </div>

                                <div className="col-lg-3 col-md-3 col-xs-12">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className={`form-control custom-input ${formik.touched.expYear && formik.errors.expYear ? 'is-invalid' : ''}`}
                                            id="expYear"
                                            name="expYear"
                                            placeholder="Years"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expYear}
                                        />
                                        {formik.touched.expYear && formik.errors.expYear && (
                                            <div className="invalid-feedback">{formik.errors.expYear}</div>
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-3 col-xs-12">
                                    <div className="form-group">
                                        <input
                                            type="number"
                                            className={`form-control custom-input ${formik.touched.expMonth && formik.errors.expMonth ? 'is-invalid' : ''}`}
                                            id="expMonth"
                                            name="expMonth"
                                            placeholder="Months"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.expMonth}
                                        />
                                        {formik.touched.expMonth && formik.errors.expMonth && (
                                            <div className="invalid-feedback">{formik.errors.expMonth}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <input
                                    type="file"
                                    accept=".pdf,.docx" // Accept PDF and DOCX files
                                    className={`form-control custom-input ${formik.touched.resume && formik.errors.resume ? 'is-invalid' : ''}`}
                                    id="resume"
                                    name="resume"
                                    onChange={(event) =>
                                        formik.setFieldValue('resume', event.currentTarget.files[0])
                                    }
                                    onBlur={formik.handleBlur}
                                />

                                {formik.touched.resume && formik.errors.resume && (
                                    <div className="invalid-feedback">{formik.errors.resume}</div>
                                )}
                            </div>

                            <div className="form-group">
                                <textarea
                                    id="skills"
                                    name="skills"
                                    className={`form-control custom-input ${formik.touched.skills && formik.errors.skills ? 'is-invalid' : ''}`}
                                    rows="3"
                                    placeholder="Skills"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.skills}
                                ></textarea>
                                {formik.touched.skills && formik.errors.skills && (
                                    <div className="invalid-feedback">{formik.errors.skills}</div>
                                )}
                            </div>
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button className='submit-btn' variant="primary" onClick={formik.handleSubmit} disabled={!formik.isValid}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        </>
    );
}

export default ModalCareer;
