import React from 'react'
import '../assets/style/whyus.css'
import '../assets/style/Responsiveness.css'
import why2 from '../assets/images/why-2.jpg'
import why4 from '../assets/images/why-4.jpg'
import why3 from '../assets/images/why-3.jpg'
import why1 from '../assets/images/why-1.jpg'
import shape3 from '../assets/images/shape-3.png'
import star2 from '../assets/images/star-2.png'
import shape5 from '../assets/images/shape-5.png'

const WhyUs = () => {
    return (
        <div className="why-us tnb">
            <div className="container">
                <div className="small-heading">
                    <h4>Why Us</h4>
                </div>
                <div className="big-heading">
                    <h5>Why Choose Neosao</h5>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="why-text">
                            <img src={why2} alt="Exceptional Customer Service" />
                            <h4>Exceptional Customer Service</h4>
                            <p>
                                We take great pride in delivering excellent service to our customers.
                                We understand how important our customers are to us, so we make every
                                effort to assist, guide, and provide the best possible solutions, as
                                well as after-sales services and support.
                            </p>
                        </div>
                        {/* why-text */}
                    </div>
                    {/* col 3 */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="why-text">
                            <img src={why4} alt="High-Performance Software Solutions" />
                            <h4>High-Performance Software Solutions</h4>
                            <p>
                                We provide high-quality, technically advanced, and high-performance
                                software solutions with tangible results. We create a wide variety of
                                web applications, including B2B and B2C eCommerce portals, business
                                Commerce solutions, and more.
                            </p>
                        </div>
                        {/* why-text */}
                    </div>
                    {/* col 3 */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="why-text">
                            <img src={why3} alt="Competitive Prices" />
                            <h4>Competitive <br />Prices</h4>
                            <p>
                                We offer the best cutting-edge technologies for software development
                                solutions and digital marketing services to improve your brand value
                                and sales across multiple channels at a very competitive and affordable
                                price.
                            </p>
                        </div>
                        {/* why-text */}
                    </div>
                    {/* col 3 */}
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="why-text">
                            <img src={why1} alt="Dedicated Project Team" />
                            <h4>Dedicated Project <br /> Team</h4>
                            <p>
                                When it comes to managing our customers' tasks, we ensure a knowledgeable
                                as well as a dedicated team to complete the tasks. Delivering excellence
                                is our company's slogan. We have a dedicated team of software professionals
                                who strive for excellence.
                            </p>
                        </div>
                        {/* why-text */}
                    </div>
                    {/* col 3 */}
                </div>
                <div className="star">
                    <img src={shape3} alt="Star" />
                </div>
                <div className="star2">
                    <img src={star2} alt="Star" />
                </div>
                <div className="star3">
                    <img src={shape5} alt="Star" />
                </div>
            </div>
            {/* <div className="col-md-12 col-sm-12 col-xs-12 pnm">
		<div className="cloud1">
			<img src="images/cloud1.png" alt="Cloud" />
		</div>
	</div> */}
        </div>

    )
}

export default WhyUs