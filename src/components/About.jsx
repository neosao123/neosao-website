import React, { useEffect, useState } from 'react'
import '../assets/style/about.css'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import star3 from '../assets/images/star-3.png'
import cloud1 from '../assets/images/cloud1.png'
import abtImg from '../assets/images/abt-img.gif'
import shape1 from '../assets/images/shape-1.png'
import shape2 from '../assets/images/shape-2.png'
import shape3 from '../assets/images/shape-3.png'
import targate from '../assets/images/targate.gif'
import innerTop from '../assets/images/inner-top-img.png'
import approch from '../assets/images/approch.gif'
import blood from '../assets/images/blood.gif'
import { FaWpforms,FaUsers,FaUserPlus,FaTint } from "react-icons/fa";
import InnerHeader from '../components/InnerHeader'


const About = () => {

    const [a, setA] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const oTop = document.getElementById('counter').getBoundingClientRect().top - window.innerHeight;

      if (a === 0 && window.scrollY > oTop) {
        const counterValues = document.querySelectorAll('.counter-value');

        counterValues.forEach((counter) => {
          const countTo = parseInt(counter.getAttribute('data-count'));
          let countNum = parseInt(counter.textContent);

          const animation = setInterval(() => {
            countNum += Math.ceil(countTo / 70); // Adjust the division value for smoother animation

            if (countNum >= countTo) {
              counter.textContent = countTo;
              clearInterval(animation);
            } else {
              counter.textContent = countNum;
            }
          }, 100); // Adjust the interval as needed
        });

        setA(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [a]);

    return (
        <>
        <InnerHeader />
            <div className="inner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="inner-text">
                                <div className="img">
                                    <img src={rocket} />
                                </div>
                                <h5>About Us <br /><span><a href="">Home</a>  |  About Us</span></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="star">
                    <img src={star1} />
                </div>
                <div className="star3">
                    <img src={star2} />
                </div>
                <div className="cloud3">
                    <img src={cloud1} />
                </div>
            </div>

            <div className="about-bg tnb7 innner-abt">
                <div className="container">
                    <div className="row">
                        {/* <div className="col-md-6 col-sm-6 col-xs-12">
				<div className="abut-img">
					<img src="images/abt-img.gif" />
				</div>
			</div> */}
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="abut-right inner-abt-text">
                                <img src={abtImg} />
                                <div className="small-heading">	<h4>About Us</h4></div>
                                <div className="big-heading"><h5>Professional Business Guidance Agency</h5></div>
                                <b>"WE ARE CLOSE FAMILY OF TALENTED AND DRIVEN PEOPLE THAT SEVERS TO DELIVER <span>QUALITY</span> AND <span>HONESTY.</span>"</b>
                                <p> Neosao Services Private Limited is the Most Reliable Custom Software Development Company in India. We are an award-winning custom software development company in India that uses industry best practices to deliver reliable, stable, and scalable software development services for the Mobile-First World. Our software development company has successfully provided more than 100+ custom software solutions to companies using cutting-edge technology.</p><br />
                                <p>From 2016, we began our journey as an IT solution provider. In 2019, we formed Neosao Services Private Limited as a Software Company. We're your trusted technology partner for developing customer-centric solutions. To create world-class solutions, we use technology, people, and agile processes based on the customer experience.</p><br />
                                <p>Our qualified software professionals combine industry domain knowledge, validated methodologies, and technology expertise to deliver high-quality solutions that add value to businesses. We aim to become a well-known software consulting and development firm that serves Startups, agencies, SMEs, and large corporations. Our primary strategy for achieving our ultimate target of success is relentless creativity. By offering superior quality solutions, we have become a globally recognized software development company.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="star">
                <img src={shape3} />
            </div>
            <div className="star2">
                <img src={star2} />
            </div>
            <div className="star3">
                <img src={star3} />
            </div>
            {/* </div> about-bg */}

            <div className="vision_mission">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="vnm-text-img">
                                <img src={targate} />
                            </div>
                        </div>{/* col 6 */}
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="vnm-text">
                                <h4>Our Vision</h4>
                                <p>Our Vision is to become India's most well-known and trusted software development company.</p>
                                <h4>Our Mission</h4>
                                <p>To provide high-quality software development services while preserving profitability through dignity, honesty, and accountability.</p>
                                <h4>Our Core Values</h4>
                                <p>At Neosao, we have a collection of cultural and professional standards that reflect our highest expectations for how we connect as colleagues, fellows, alumni, partners, and board members.</p>
                            </div>
                        </div>{/* col 6 */}
                    </div>
                </div>
                <div className="cricle2">
                    <img src={innerTop} />
                </div>
            </div>{/* vision_mission */}

            <div className="main-approch">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="approch-text">
                                <div className="small-heading">	<h4>Approach</h4></div>
                                <div className="big-heading"><h5>Our Approach</h5></div>
                                <p>We aim to make our processes as simple and straightforward as possible for you as a customer-focused business. We adhere to industry best practices and guarantee that you will receive the high-quality, on-time results you need from your development partner. We put a strong emphasis on providing safe and dependable solutions with long-term value that enable our customers to focus on their core business goals.</p>
                                <ul>
                                    <li>Requirement gathering and Analysis</li>
                                    <li>Prototyping</li>
                                    <li>Approval through discussions</li>
                                    <li>Deciding milestones</li>
                                    <li>Design and development </li>
                                    <li>Progress report and meetings</li>
                                    <li>Quality Assurance and testing at all phases</li>
                                    <li>Deployment and implementation </li>
                                    <li>Post-development support and maintenance</li>
                                </ul>
                            </div>
                        </div>{/* col 6 */}
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="approch-img">
                                <img src={approch} />
                            </div>
                        </div>{/* col 6 */}
                    </div>
                </div>
                <div className="star4">
                    <img src={shape2} />
                </div>
                <div className="star5">
                    <img src={shape1} />
                </div>
            </div>

            <div className="main-csr">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="csr-img">
                                <img src={blood} />
                            </div>{/* csr */}
                        </div>{/* col 6 */}
                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="csr-text">
                                <div className="small-heading">	<h4>Our CSR</h4></div>
                                <div className="big-heading"><h5>Corporate Social Responsibility</h5></div>
                                <p>Corporate Social Responsibility at Neosao, we believe CSR involves managing our business processes to produce an overall positive impact on society. It involves taking part in things that benefit society and it is vital for business success.</p>
                                <br />
                                <p>Blood donation is the process of giving blood so that it can be used for blood transfusion in the future. It is the best type of donation one can make for the benefit of society which costs nothing but its value is more than gold. One only needs a desire to serve others, known or unknown to the blood donor. Any healthy adult can potentially be a blood donor.</p>
                            </div>{/* csr */}
                        </div>{/* col 6 */}
                    </div>
                </div>
            </div>

            <div className="quick-counter animatedParent">
                <div className="container">
                    <div className="row" id="counter">
                        <div className="col-md-3 col-sm-6 col-xs-12 counter-Txt"> <FaWpforms/> <h4>Invoices </h4><span className="counter-value" data-count="100">0</span> +</div>
                        <div className="col-md-3 col-sm-6 col-xs-12 counter-Txt"> <FaUsers/><h4>Clients </h4><span className="counter-value" data-count="50">0</span> +</div>
                        <div className="col-md-3 col-sm-6 col-xs-12 counter-Txt"> <FaUserPlus /> <h4>Team </h4><span className="counter-value" data-count="10">0 </span> +</div>
                        <div className="col-md-3 col-sm-6 col-xs-12 counter-Txt"> <FaTint /><h4> Donated Bags </h4><span className="counter-value" data-count="5">0 </span>+</div>
                    </div>
                </div>
            </div>

            

        </>

    )
}

export default About