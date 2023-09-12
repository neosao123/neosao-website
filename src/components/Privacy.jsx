import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/style/policy.css'
import '../assets/style/Responsiveness.css'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import cloud1 from '../assets/images/cloud1.png'
import Headers from '../components/Header'


const Privacy = () => {
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
                <h5>
                  PRIVACY POLICY<br />
                  <span>
                    <Link to='/' >Home</Link> | Privacy
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

      <div className="mnp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="tnc-text">
                <p><i className="fa fa-circle" aria-hidden="true"></i> Collection of Personal Data shall be resorted to only to the extent that it may be necessary for the technical and commercial operation of its activities;</p>
                <p><i className="fa fa-circle" aria-hidden="true"></i> Users shall be informed of any such collection and shall also be informed of the specific purpose for which it is being collected not later than the moment of collection;</p>
                <p><i className="fa fa-circle" aria-hidden="true"></i> The Personal Data collected shall be used fairly and lawfully for the specified purposes and only for these purposes;</p>
                <p><i className="fa fa-circle" aria-hidden="true"></i> Users shall be given access to their Personal Data;</p>
                <p><i className="fa fa-circle" aria-hidden="true"></i> The Company shall ensure that Users’ Personal Data shall be kept secure using both technical and organizational measures;</p>
                <p><i className="fa fa-circle" aria-hidden="true"></i> The Company shall not pass on Users’ Personal Data to anybody unless a User specifically consents that it can so communicate his or her information; and</p>
                <p><i className="fa fa-circle" aria-hidden="true"></i> The Company shall only store Users’ Personal Data for the length of time required for the purpose for which it is collected</p><br />
                <h2>Collection of Data and Information</h2>
                <p>Users that wish to avail themselves of that part of the Services which requires registration and who submit an online application shall be required to provide the Company with particular information in the form of completing certain fields which the Company may deem necessary for the provision of the Services.</p>
                <p>The Company may track Users’ visits to the Website to better understand what appeals most to Users and improve the Services. To this end Cookies may be installed on Users’ computers or such other device as is used to access the Website.</p>
                <p>Access and Control to Personal Data<br />
                  The Company shall ensure that Users’ shall be able to:</p>
                <p>view the Personal Data held by the Company on the particular User;<br />
                  request that any Personal Data that is inaccurate, irrelevant or out of date be amended or deleted; and<br />
                  choose to stop using the Services and have his or her Personal Data deleted, if such deletion is permissible by law and/or will not prejudice the Company’s position at law</p><br />
                <h2>Security </h2>
                <p>Company employees who have access either to the databases that store User information or to the servers that host the Services shall comply with strict security rules. Sensitive Personal Data won’t take from the user.</p>
                <p>The Company is not hereby undertaking that no loss, misuse or alteration of data shall occur.</p><br />
                <h2>Disclosure of Personal Data</h2>
                <p>The Company shall only disclose Personal Data if it is bound to do so by law or if it has been expressly authorized to do so by the User concerned. </p>
                <p>The Company shall not sell Personal Data to third parties unless it has obtained the User’s consent thereto.</p>
                <p>The Company shall store Personal Data for such duration as may be necessary to comply with legal requirements.</p><br />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Privacy