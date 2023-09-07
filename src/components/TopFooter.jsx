import React from 'react'
import cloud1 from '../assets/images/cloud1.png'
import cloud2 from '../assets/images/cloud2.png'
import '../assets/style/Responsiveness.css'
import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";

const TopFooter = () => {
    return (
        <div id="footer">
            <div className="opening">
                <img src={cloud2} alt='cloud-2' />
            </div>
            <div className="opening1">
                <img src={cloud1} alt='cloud-1' />
            </div>
            <div className="top-addrsss animatedParent tnb5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="top-details">
                                <div className="top-details-icon">
                                    <span> <FaPhone /> </span>
                                </div>
                                <div className="top-details-text">
                                    <h3>+91-231 355 0197<br />+91-7038 31 7038</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="top-details">
                                <div className="top-details-icon">
                                    <span> <FaEnvelope /> </span>
                                </div>
                                <div className="top-details-text">
                                    <h3>support@neosao.com</h3>
                                    <p>15 Hours Real Time Support</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="top-details">
                                <div className="top-details-icon">
                                    <span> <FaMap /> </span>
                                </div>
                                <div className="top-details-text">
                                    <h3>Location</h3>
                                    <p> Kolhapur city</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFooter