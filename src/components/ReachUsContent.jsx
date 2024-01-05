import React from "react";
import "../assets/style/reachuscontent.css";
import "../assets/style/Responsiveness.css";
import rocket from "../assets/images/rocket.png";
import star1 from "../assets/images/star-1.png";
import star2 from "../assets/images/star-2.png";
import cloud1 from "../assets/images/cloud1.png";
import parra from "../assets/images/parra-icn.png";
import {
  FaMapMarkerAlt,
  FaPhoneVolume,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import InnerHeader from "../components/InnerHeader";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";
import { sendEmail } from "../services";
import LodingImages from "./LodingImages";

const ReachUsContent = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .matches(
        /^[A-Za-z\s]+$/,
        "Name should only contain alphabetical characters and spaces"
      ),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number should be exactly 10 digits")
      .required("Phone is required"),
    subject: Yup.string()
      .min(5, "Subject should be at least 5 characters long")
      .required("Subject is required"),
    requestDetails: Yup.string()
      .min(10, "Message should be at least 10 characters long")
      .required("Message is required"),
  });

  // Form submission function

  const handleSubmit = async (values) => {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("subject", values.subject);
    formData.append("message", values.requestDetails);

    await sendEmail(formData)
      .then((res) => {
        toast.success(res.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <InnerHeader />
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="inner-text">
                <div className="img">
                  {/* <img src={rocket} alt="Rocket" /> */}
                  <LodingImages
                    src={rocket}
                    alt={"Service 2"}
                    height={"auto"}
                    width={"auto"}
                  />
                </div>
                <h5>
                  GET IN TOUCH
                  <br />
                  <span>
                    <Link to="/">Home</Link> | Contact Us
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
      <div className="inner-contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="inner-con-right">
                <h3>Get In Touch</h3>
                <h2>We are committed to serve you better..</h2>
                <h4>Kolhapur Branch-</h4>
                <h4>
                  <span>
                    <FaMapMarkerAlt />
                  </span>{" "}
                  Ayodhya Tower Bulding No.4, Dabholkar Corner, Kolhapur -
                  416001
                </h4>
                <h4>Pune Branch-</h4>
                <h4>
                  <span>
                    <FaMapMarkerAlt />
                  </span>{" "}
                  Flat No.5, 25A/1B, Vaibhav Nagar, Balajinagar, Pune,
                  Maharashtra 411043
                </h4>
                <ul>
                  <li>
                    <span>
                      {" "}
                      <FaPhoneVolume />{" "}
                    </span>
                    <a href="tel:2313550197">+91-231 355 0197</a>
                  </li>
                  <li>
                    <span>
                      {" "}
                      <FaEnvelope />{" "}
                    </span>
                    <a href="mailto:support@neosao.com">support@neosao.com</a>
                  </li>
                </ul>
                <h3 className="find">Find us on</h3>
                <ul className="social-icon">
                  <li>
                    <a
                      href="https://www.facebook.com/NeoSao-Services-PvtLtd-604849376679821"
                      target="_blank"
                    >
                      <span>
                        {" "}
                        <FaFacebookF />{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/LtdNeosao" target="_blank">
                      <span>
                        {" "}
                        <FaTwitter />{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/neosaoservices/"
                      target="_blank"
                    >
                      <span>
                        {" "}
                        <FaInstagram />{" "}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/neosao-services-private-limited"
                      target="_blank"
                    >
                      <span>
                        {" "}
                        <FaLinkedinIn />{" "}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="parra">
                <img src={parra} alt="Parra Icon" />
              </div>
              <div className="star2">
                <img src={star2} alt="Star 2" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="inner-con-left">
                <h4>Send your Request</h4>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    requestDetails: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form id="sendform">
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        as="textarea"
                        id="requestDetails"
                        name="requestDetails"
                        className="form-control"
                        rows="4"
                        placeholder="Message*"
                        required
                      />
                      <ErrorMessage
                        name="requestDetails"
                        component="div"
                        className="error"
                      />
                    </div>
                    <div
                      className="animated fadeInDownShort go"
                      style={{ textAlign: "center" }}
                    >
                      <button
                        type="submit"
                        className="btn btn-primary"
                        id="send"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12 pnm">
          <div class="map">
            <iframe
              src="https://www.google.com/maps/d/u/0/embed?mid=16AD5qFFtDn9qULZR1gXvR3-QgUxuHeM&amp;ehbc=2E312F"
              width="100%"
              height="480"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReachUsContent;
