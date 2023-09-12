import React from 'react'
import '../assets/style/policy.css'
import '../assets/style/Responsiveness.css'
import {Link} from 'react-router-dom'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import cloud1 from '../assets/images/cloud1.png'
import Headers from '../components/Header'

const Refund = () => {
  return (
    <>

    <Headers />
      <div className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="inner-text">
                <div className="img">
                  <img src={rocket} alt="Rocket" />
                </div>
                <h5>PRIVACY POLICY<br /><span><Link to='/'> Home </Link> | Privacy</span></h5>
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



      <div className="mnp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tnc-text">
                <h2>No Refund Policy for Digital Services</h2>
                <p>Due to the non-returnable nature of digital products/services once they’re delivered/deployed, your refund policy is allowed to state no refunds. An option is to include a limited refund policy, where items/services become non-refundable once they have been accessed or serviced.</p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default Refund