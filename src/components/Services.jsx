import React from 'react'
import '../assets/style/services.css'
import '../assets/style/Responsiveness.css'
import ser1 from '../assets/images/ser-1.jpg'
import ser2 from '../assets/images/ser-2.jpg'
import ser3 from '../assets/images/ser-3.jpg'
import ser4 from '../assets/images/ser-4.jpg'
import ser5 from '../assets/images/ser-5.jpg'
import ser6 from '../assets/images/ser-6.jpg'
import shape1 from '../assets/images/shape-1.png'
import shape3 from '../assets/images/shape-3.png'
import star2 from '../assets/images/star-2.png'
import { Link } from 'react-router-dom'

const Services = () => {
  return (

    <div className="services tnb" id="services">
      <div className="container">
        <div className="small-heading">
          <h4>Services</h4>
        </div>
        <div className="big-heading">
          <h5>What We Do</h5>
        </div>
        <div className="row">


          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="services-text">
              <img src={ser2} alt="Service 2" />
              <div className="item-contant">
                <h6>Web Design &amp; Development</h6>
                <p>
                  We provide custom web design and development solutions for various industries, including startups, tech
                  products...
                </p>
                <Link to="/services-contact">
                  Read More <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="services-text">
              <img src={ser3} alt="Service 3" />
              <div className="item-contant">
                <h6>Mobile Application Development</h6>
                <p>
                  Our mobile application development services are designed to deliver <br /> cutting-edge, personalized mobility
                  solutions...
                </p>
                <Link to="/services-contact">
                  Read More <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="services-text">
              <img src={ser4} alt="Service 4" />
              <div className="item-contant">
                <h6>Application Maintenance & Management</h6>
                <p>
                  As a leading software solution development and maintenance service provider company, we strive...
                </p>
                <Link to="/services-contact">
                  Read More <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="services-text">
              <img src={ser5}alt="Service 5" />
              <div className="item-contant">
                <h6>Graphic Designing</h6>
                <p>
                  Our highly creative Graphic designers help you develop eye-catchy and appealing UI/UX designs based on current...
                </p>
                <Link to="/services-contact">
                  Read More <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="services-text">
              <img src={ser6} alt="Service 6" />
              <div className="item-contant">
                <h6>Digital Marketing</h6>
                <p>
                  Digital media has a massive impact on our daily lives. Social Media Marketing offers the best option to reach your...
                </p>
                <Link to="/services-contact">
                  Read More <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>


          <div className="col-md-4 col-sm-6 col-xs-12">
            <div className="services-text">
              <img src={ser1} alt="Service 1" />
              <div className="item-contant">
                <h6>Technology Consulting</h6>
                <p>
                  As a reliable IT consulting firm, we offer best-in-class IT planning and software consulting services to solve easy to...
                </p>
                <Link to="/services-contact">
                  Read More <i className="fa fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
      {/* STAR ANIMATION */}
      <div className="star">
        <img src={shape3} alt="Star Shape 3" />
      </div>
      <div className="star2">
        <img src={star2} alt="Star Shape 2" />
      </div>
      <div className="star3">
        <img src={shape1} alt="Star Shape 1" />
      </div>

      {/* STAR ANIMATION END */}



    </div>
  )
}

export default Services