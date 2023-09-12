import React from 'react'
import '../assets/style/career.css'
// import '../assets/style/Responsiveness.css'
import hire from '../assets/images/hire.png'
import shape2 from '../assets/images/shape-2.png'
import star2 from '../assets/images/star-2.png'
import { Link } from 'react-router-dom'

const Career = () => {
  return (
    <div className="career tnb" id="career">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="career-img">
              <img src={hire} alt="Hiring" />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <div className="career-text">
              <h5>We are hiring!</h5>
              <span>OPENINGS & OPPORTUNITIES</span><br />
              <Link to='/career-content' className="contact_btn animated fadeInUpShort go">
                <i className="fa fa-briefcase" aria-hidden="true"></i> | Find your Job
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="star">
        <img src={shape2} alt="Star Shape 1" />
      </div>
      <div className="star2">
        <img src={star2} alt="Star Shape 2" />
      </div>
    </div>

  )
}

export default Career