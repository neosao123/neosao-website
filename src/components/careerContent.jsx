import React from 'react'
import '../assets/style/careerContent.css'
import '../assets/style/Responsiveness.css'
import { Link } from 'react-router-dom'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import cloud1 from '../assets/images/cloud1.png'
import { FaLongArrowAltRight, FaPenAlt } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";
import { MdDeveloperMode } from "react-icons/md";
import InnerHeader from '../components/InnerHeader'

const careerContent = () => {
  return (
    <>
      <InnerHeader />
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="inner-text">
                <div className="img">
                  <img src={rocket} alt="Rocket" />
                </div>
                <h5>
                  Current Job Openings
                  <br />
                  <span>
                    <Link to='/' > Home </Link> | Career
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

      <div className="inner-career tnb7">
        <div className="container">
          <div className="text-center">
            <div className="small-heading">
              <h4>Featured Jobs</h4>
            </div>
            <div className="big-heading">
              <h5>Know your worth and find the <br /> job that qualifies your life</h5>
            </div>
          </div>

          <div className="row">


            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-career-text">
                <div className="career-icon">
                  <MdDeveloperMode />
                </div>
                <div className="icon-text">
                  <h4>Web Developer</h4>
                  <p>
                    <span className='fa' > <FaLongArrowAltRight /> </span>  Experience : 2-3 Years
                  </p>
                  <p>
                    <span className='fa' > <FaLongArrowAltRight /> </span>  Skill Required :{' '}
                    <span>Codeigniter/Laravel</span>
                  </p>
                  <a href="#" data-toggle="modal" data-target="#exampleModalCenter" className='mb-2'>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-career-text">
                <div className="career-icon">
                  <FaPenAlt />
                </div>
                <div className="icon-text">
                  <h4>UI Developer</h4>
                  <p>
                    <span className='fa' ><FaLongArrowAltRight /></span>  Experience : 2-3 Years
                  </p>
                  <p>
                    <span className='fa'><FaLongArrowAltRight /></span> Skill Required :{' '}
                    <span>In-depth knowledge of Angular</span>
                  </p>
                  <a href="#" data-toggle="modal" data-target="#exampleModalCenter" className='mb-2'>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-career-text">
                <div className="career-icon">
                  <BsAndroid2 />
                </div>
                <div className="icon-text">
                  <h4>Flutter Developer</h4>
                  <p>
                    <span className='fa'><FaLongArrowAltRight /></span>  Experience : 2-3 Years
                  </p>
                  <p>
                    <sapn className='fa' > <FaLongArrowAltRight /> </sapn>Skill Required :{' '}
                    <span>In-depth knowledge of Flutter</span>
                  </p>
                  <a href="#" data-toggle="modal" data-target="#exampleModalCenter" className='mb-2'>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-career-text">
                <div className="career-icon">
                  <BsAndroid2 />
                </div>
                <div className="icon-text">
                  <h4>Android Developer</h4>
                  <p>
                    <sapn className='fa' > <FaLongArrowAltRight /> </sapn> Experience : 2-3 Years
                  </p>
                  <p>
                    <sapn className='fa' > <FaLongArrowAltRight /> </sapn> Skill Required :{' '}
                    <span>In-depth knowledge of Android</span>
                  </p>
                  <a href="#" data-toggle="modal" data-target="#exampleModalCenter" className='mb-2'>
                    Apply Now
                  </a>
                </div>
              </div>
            </div>

            {/* MODAL START */}

            <div className="modal fade custom-modal" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Fill Information</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form id="sendJobform">
                      <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" required="required" />
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" required="required" />
                      </div>
                      <div className="form-group">
                        <input type="number" className="form-control" id="phone" name="phone" placeholder="Phone" required="required" />
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                          <select className="form-select" id="candType" name="candType">
                            <option selected="" value="">-- Select --</option>
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
                        <input type="file" className="form-control" id="resume" name="resume" required="required" />
                      </div>
                      <div className="form-group">
                        <textarea id="skills" name="skills" className="form-control" rows="3" placeholder="Skills"></textarea>
                      </div>
                      <div className="read-btn animated fadeInDownShort go" style={{ textAlign: 'center' }}>
                        <button type="button" className="btn btn-primary" id="send">Submit</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* MODAL END */}

          </div>
        </div>
      </div>

    </>
  )
}

export default careerContent