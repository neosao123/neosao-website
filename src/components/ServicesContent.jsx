import React from "react";
import "../assets/style/servicescontent.css";
import "../assets/style/Responsiveness.css";
import rocket from "../assets/images/rocket.png";
import satr1 from "../assets/images/star-1.png";
import star2 from "../assets/images/star-2.png";
import cloud1 from "../assets/images/cloud1.png";
import webDevelop from "../assets/images/webndevelop.gif";
import keyFeature from "../assets/images/key-feature.gif";
import mad from "../assets/images/Mobile-app-development.gif";
import shape2 from "../assets/images/shape-2.png";
import aad from "../assets/images/android-app-development.gif";
import mobileApp from "../assets/images/mobile-application.gif";
import ams from "../assets/images/app-maintenance-and-support.gif";
import galshir from "../assets/images/galshir-pen-tool-creation.gif";
import socialMedia from "../assets/images/Social_Media.gif";
import offer from "../assets/images/offer.gif";
import technologyConsulting from "../assets/images/technology_ consulting.gif";
import help from "../assets/images/helf.gif";
import { Link } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";
import InnerHeader from "../components/InnerHeader";

const ServicesContent = () => {
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
                <h5>
                  What We Do <br />
                  <span>
                    <Link to="/">Home</Link> | Services
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="star">
          <img src={satr1} />
        </div>
        <div className="star3">
          <img src={star2} />
        </div>
        <div className="cloud3">
          <img src={cloud1} />
        </div>
      </div>

      <div className="main-inner-services tnb7">
        <div className="container">
          <div className="heading-top-innner">
            <div className="small-heading">
              <h4>Web Designing</h4>
            </div>
            <div className="big-heading">
              <h5>Web Design & Development</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="inner-sr-text">
                <img src={webDevelop} />
                <p>
                  Neosao Services Private Limited, as one of the top web
                  development companies, is committed to developing
                  best-in-class web solutions that give your company a
                  competitive advantage through growth. Our web development team
                  is experienced in working on projects of various complexities,
                  so you can count on us to deliver creative, stable, scalable,
                  and high-performance web solutions that will significantly
                  increase your company's revenue and profits. We have partnered
                  with a number of industry verticals, including healthcare,
                  eLearning, data mining, Fintech, and eCommerce, and our
                  clients range from startups to businesses. We have end-to-end
                  custom web development services, including bespoke web
                  development from the ground up, migration, redesign, and
                  ongoing maintenance.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-sr-text-img">
                <div className="number4">1</div>
                <div className="main-inner-services-titiel">What we Offer</div>
                <p>
                  Our full-stack web application development services are ideal
                  for you if you want to experience the best web development to
                  ensure your business's growth-centric digital transformation.
                  Our web development services cover everything from e-commerce
                  portals to CMS and ERP solutions to Chatbots, custom
                  applications, and more.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-sr-text-img">
                <div className="number4">2</div>
                <div className="main-inner-services-titiel">
                  Custom Web Design and Development
                </div>
                <p>
                  We offer a wide range of custom web application development
                  services, from simple landing pages to complex tailored web
                  solutions, to help clients achieve their business objectives.
                  We support audits and evaluation of your existing system and
                  provide the best optimal solution for your requirement.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-sr-text-img">
                <div className="number4">3</div>
                <div className="main-inner-services-titiel">
                  eCommerce Solutions
                </div>
                <p>
                  Using the right mix of omnichannel presence,
                  know-your-customer resources, and user-centric solutions, we
                  help eCommerce, and mCommerce businesses expand their customer
                  base and revenue. We help B2B and B2C clients increase
                  customer loyalty, grow their audiences, and increase revenue
                  as India's leading eCommerce development business. We develop
                  E-Commerce applications based on Microsoft as well as
                  open-source technologies such as Magento, JavaScript, ASP.Net,
                  Java, PHP etc. We help you in E-commerce portal development,
                  secure payment gateway integration and shopping cart
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-sr-text-img">
                <div className="number4">4</div>
                <div className="main-inner-services-titiel">
                  Web Portal Development
                </div>
                <p>
                  We provide a portal that allows you to connect with your
                  customers quickly and easily. Our web portal creation process
                  considers all of the needs and goals of online businesses. We
                  help you create business portals (B2B and B2C), matrimony, Job
                  and mailing portals etc.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-sr-text-img highlights">
                <div className="number4">
                  <i className="fa fa-key" aria-hidden="true"></i>
                </div>
                <div className="main-inner-services-titiel">
                  Our Key highlights
                </div>
                <ul>
                  <li>
                    <p>Teams with a high level of creativity and motivation</p>
                  </li>
                  <li>
                    <p>
                      We are mindful of the value of quality and protection in
                      the workplace.
                    </p>
                  </li>
                  <li>
                    <p>Your Ideas Are Safe With Us</p>
                  </li>
                  <li>
                    <p>Process Innovation</p>
                  </li>
                  <li>
                    <p>Result-Driven Approach</p>
                  </li>
                  <li>
                    <p>In-Depth Domain Knowledge</p>
                  </li>
                  <li>
                    <p>Non-Disclosure Agreement</p>
                  </li>
                  <li>
                    <p>Integrity & Transparency</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="inner-sr-text-img">
                <img src={keyFeature} className="keyfeature" />
              </div>
            </div>
          </div>
        </div>

        <div className="tnb5 ser-bg">
          <div className="container">
            <div className="heading-top-innner">
              <div className="small-heading">
                <h4>Mobile App</h4>
              </div>
              <div className="big-heading">
                <h5>Mobile Application Development</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="inner-sr-text">
                  <img src={mad} alt="Mobile App Development" />
                  <p>
                    If you have an idea, we have a team of software developers
                    who can turn it into a healthy and feature-rich mobile
                    application. Our mobile app development company in India
                    handles everything from the initial planning to the final
                    app store deployment. We create native and cross-platform
                    mobile applications with advanced feature integration. Our
                    mobile app development services are tailored to deliver
                    cutting-edge, personalized mobility solutions for your
                    specific business needs, whether you need native or
                    cross-platform applications. Our highly qualified developers
                    have developed a variety of stable and scalable applications
                    for clients in a variety of industry verticals. So, to get
                    the most out of it, you can use our mobile app development
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="star4">
            <img src={shape2} alt="Star" />
          </div>
        </div>

        <div className="tnb5">
          <div className="container">
            <div className="heading-top-innner">
              <div className="small-heading">
                <h4>Android App</h4>
              </div>
              <div className="big-heading">
                <h5>Android App Development</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="inner-sr-text ser-imgset-right">
                  <img src={aad} alt="Android App Development" />
                  <p>
                    Android is one of the most flexible, diversified, and
                    visually stunning platforms for mobile app growth. We are
                    assigning solution-based principles to challenges from a
                    variety of sectors for our clients. We have helped increase
                    their respective ROI for the company, but we have also
                    extended our knowledge domain in the same industry. Working
                    tirelessly in these business domains has gained us an expert
                    role in our mobile app development services. We help you in
                    Native android app development as well as Hybrid android app
                    development.
                  </p>
                  <br />
                  <p>
                    Neosao Services Private Limited is a reputable Android app
                    development firm in India. It has a device development team
                    that is proficient in all versions of the Android operating
                    system. We offer mobile applications for various industries
                    such as Banking & Finance, hotel management, Lifestyle
                    sector, Travel Booking, Education & Entertainment,
                    e-Commerce, Retail & Manufacturing, Fashion, Engineering,
                    Real Estate, Government, Medical & Healthcare, Insurance and
                    Security. We have a lot of happy customers all over the
                    world.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="star4">
            <img src={shape2} alt="Star" />
          </div>
        </div>

        <div className="tnb5 ser-bg">
          <div className="container">
            <div className="heading-top-innner">
              <div className="small-heading">
                <h4>iOS/ Iphone</h4>
              </div>
              <div className="big-heading">
                <h5>iOS/ Iphone Application Development</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="inner-sr-text">
                  <img src={mobileApp} alt="iOS App Development" />
                  <p>
                    iPhones are widely regarded as the most advanced and
                    reliable mobile phones available. iPhones are on the wish
                    lists of all mobile phone users because of their features.
                    iPhone application development services are on the rise due
                    to their success. The iOS mobile app creation encompasses
                    everything from sports to entertainment to healthcare.
                    Security and usability are two significant advantages of
                    iPhone app growth.
                  </p>
                  <br />
                  <p>
                    We've developed alongside the launch of iOS, so we're
                    well-versed in iPhone app development technologies and
                    services. That makes us the most compatible partner, as we
                    understand the tech-driven nature of development
                    methodologies and the trends that emerge from time to time.
                    We offer Native iPhone app development and Hybrid iPhone app
                    development services to our customers.
                  </p>
                  <br />
                  <p>
                    In the field of mobile application production, Neosao
                    Services Private Limited is a well-known name. It dominates
                    the Indian outsourcing market as a user-focused iPhone app
                    development business. The company has successfully developed
                    smart, personalized apps for a variety of sectors, including
                    e-Commerce, accounting & finance, hotels & event management,
                    education & entertainment, Lifestyle & healthcare, Travel
                    Booking, Fashion & Engineering, Real Estate, Government,
                    Insurance, Retail & Wholesale, Automobile, Security, and so
                    on.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img highlights">
                  <div className="number4">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                  <div className="main-inner-services-titiel">
                    Our Key highlights
                  </div>
                  <ul>
                    <li>
                      <p>Scalability &amp; Interoperability</p>
                    </li>
                    <li>
                      <p>Cross-platform reach</p>
                    </li>
                    <li>
                      <p>Security &amp; Compliance</p>
                    </li>
                    <li>
                      <p>User Experience Design</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img">
                  <img src={keyFeature} alt="Key Features" />
                </div>
              </div>
            </div>
          </div>
          <div className="star4">
            <img src={shape2} alt="Star" />
          </div>
        </div>

        <div className="tnb5">
          <div className="container">
            <div className="heading-top-innner">
              <div className="small-heading">
                <h4>App Maintenance</h4>
              </div>
              <div className="big-heading">
                <h5>Application Maintenance & Management</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="inner-sr-text">
                  <img src={ams} />

                  <p>
                    Neosao Services Private Limited offers a variety of
                    independent software maintenance services that meet the
                    robust security and industry requirements. Because of the
                    growing complexity of applications, we've chosen to use
                    automated software maintenance, bug tracking, and on-demand
                    support options by offering expert Web & Mobile Device
                    maintenance services. We aim to integrate the best-in-class
                    application maintenance practices that facilitate your
                    business applications' optimal functioning to ensure smooth
                    process delivery as a leading software application
                    maintenance company. Bug fixes, activity monitoring,
                    3rd-party support, and more are all part of our device
                    maintenance services.
                  </p>
                  <br />
                  <p>
                    Many websites are experiencing issues with slow loading
                    times. Your website might be visually appealing, but it can
                    hurt your company if it takes too long to load. Through the
                    best services available, we provide you with a solution to
                    your website speed issues. We look into topics like landing
                    page path, browser caching, and so on.
                  </p>
                  <br />
                  <p>
                    We have a professional team that is competent and skilled in
                    the creation of websites. They put in the most significant
                    effort in analyzing, researching, and troubleshooting your
                    website issue to find a solution. The cost of our website
                    speed optimization service is low. Your website problems
                    will be resolved as soon as possible, ensuring your complete
                    satisfaction.
                  </p>
                  <br />
                  <p>
                    We don't just check your website and hand it over to you in
                    a neatly wrapped gift package! After gaining a thorough
                    understanding of the issue at hand, we introduce solutions.
                    We work hard to keep up with Google's Algorithm changes
                    every year for your company. We don't just build you a fancy
                    website; we make your company for improved traffic,
                    conversions, and ROI! We help you in Optimizing Your
                    https://neosao.com/assets/images and CSS Clean Up, Caching
                    Plugins and many more.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img highlights">
                  <div className="number4">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                  <div className="main-inner-services-titiel">
                    Our Key highlights
                  </div>
                  <ul>
                    <li>
                      <p>
                        On-Demand Maintenance Team for scheduled maintenance
                      </p>
                    </li>
                    <li>
                      <p>
                        Pre-Support Audits for Version upgrades and enhancements
                      </p>
                    </li>
                    <li>
                      <p>Performance testing, optimization and monitoring</p>
                    </li>
                    <li>
                      <p>Bug Tracking and Fixes</p>
                    </li>
                    <li>
                      <p>Operating system and Server Migration</p>
                    </li>
                    <li>
                      <p>Third-party application maintenance</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img">
                  <img src={keyFeature} className="keyfeature" />
                </div>
              </div>
            </div>
          </div>
          <div className="star4">
            <img src={shape2} />
          </div>
        </div>

        <div className="tnb5 ser-bg">
          <div className="container">
            <div className="heading-top-innner">
              <div className="small-heading">
                <h4>Graphic</h4>
              </div>
              <div className="big-heading">
                <h5>Graphic Designing</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="inner-sr-text">
                  <img src={galshir} alt="Graphic Design GIF" />
                  <p>
                    We offer your web application an interactive design,
                    user-friendly interface, motion graphics, and visual feature
                    that perfectly matches your brand image. Our web design
                    services team will provide Businesses, startups, SMEs, and
                    ISVs with affordable and innovative website design services.
                    Our graphic designers have consistently created imaginative
                    and attractive designs.
                  </p>
                  <br />
                  <p>
                    Graphic design, as a communication tool, is essential in
                    this competitive environment. An eye-catching graphic design
                    is a well-balanced mix of text and
                    https://neosao.com/assets/images that effectively
                    communicates the business concepts through multiple
                    platforms. For any company to create a brand identity, an
                    attractive and memorable graphic design is a must. To expand
                    your company through various media channels, you'll need a
                    perfect graphic design that not only effectively
                    communicates your business ideas but also looks good.
                    Graphic designs have become increasingly important in
                    attracting potential buyers' interest in companies to win
                    the market.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 mt3">
                <div className="inner-sr-text-img">
                  <div className="number4">1</div>
                  <div className="main-inner-services-titiel">
                    Corporate UX/UI Designing
                  </div>
                  <p>
                    With our corporate website design services, we can meet
                    specific unique criteria for our corporate clients.
                    Thousands of corporate websites have been designed by our
                    experts.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12 mt3">
                <div className="inner-sr-text-img">
                  <div className="number4">2</div>
                  <div className="main-inner-services-titiel">
                    Custom Web Designing
                  </div>
                  <p>
                    Our website design team creates stunning visual designs with
                    beautiful typography while keeping the target audience in
                    mind. As a result, our high-quality architecture strikes the
                    right notes.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img">
                  <div className="number4">3</div>
                  <div className="main-inner-services-titiel">
                    Landing Page Design
                  </div>
                  <p>
                    Our innovative web design services aim to create the best
                    company landing pages possible. In creating landing pages,
                    we adhere to industry best practices and patterns.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img">
                  <div className="number4">4</div>
                  <div className="main-inner-services-titiel">
                    Mobile App UI/UX Design
                  </div>
                  <p>
                    Our UI/UX design team develops appealing and eye-popping
                    UI/UX templates based on current web design trends
                    customized to your unique business needs and delivered on
                    time.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img">
                  <div className="number4">5</div>
                  <div className="main-inner-services-titiel">
                    Logo Design Services
                  </div>
                  <p>
                    We design a logo for your company that creates a good brand
                    identity and familiarity. When people see our logos, they
                    immediately think of your product.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img highlights">
                  <div className="number4">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                  <div className="main-inner-services-titiel">
                    Our Key highlights
                  </div>
                  <ul>
                    <li>
                      <p>Fast response time</p>
                    </li>
                    <li>
                      <p>High-quality services with economical pricing</p>
                    </li>
                    <li>
                      <p>Service is available at all times</p>
                    </li>
                    <li>
                      <p>Fully online process</p>
                    </li>
                    <li>
                      <p>
                        Dedicated team to ensure smooth and hassle-free
                        implementation
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="inner-sr-text-img">
                  <img src={keyFeature} className="keyfeature" />
                </div>
              </div>
            </div>
            <div className="ser-bg">
              <div className="star4">
                <img src={shape2} />
              </div>
            </div>

            <div className="tnb5">
              <div className="container">
                <div className="heading-top-innner">
                  <div className="small-heading">
                    <h4>Digital</h4>
                  </div>
                  <div className="big-heading">
                    <h5>Digital Marketing</h5>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="inner-sr-text">
                      <img src={socialMedia} />
                      <p>
                        Neosao Services Private Limited is a Kolhapur -based
                        digital marketing, website design, and application
                        Development Company. We develop visually pleasing
                        templates, blogs, high-performance web apps, and killer
                        online promotions. Our customers are important to us. We
                        go beyond and beyond the call of duty to achieve our
                        objectives. These characteristics contribute to our
                        long-term success. Whether it is a startup, a small
                        business, or a large corporation, a business requires a
                        strong presence in the ever-changing digital world. We
                        ensure that your company has a modern reality that
                        resonates with your customers. To get these results, we
                        peel back every layer of your company and do a deep dive
                        into its heart. We strategically digitize your company
                        based on our findings and your buyer persona.
                      </p>
                      <br />
                      <p>
                        Everyone wants to develop their business/agency, get
                        more leads, improve their brand value, improve their
                        customer service, create a social presence, and so much
                        more. If you are searching for agencies that offer the
                        best digital marketing company in India, you have come
                        to the right place. We have a comprehensive digital
                        marketing approach to all of our clients, whether they
                        are just starting or expanding. Things change in the
                        internet world in a flash. Unlike other digital
                        marketing companies in India, we are always ready to
                        adjust to the ever-changing digital marketing world to
                        get you closer to your potential customers, making us
                        the best digital marketing company in India.
                      </p>
                    </div>
                  </div>

                  <div className="row mt3">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="inner-sr-text-img highlights">
                        <div className="number4">
                          <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="main-inner-services-titiel">
                          We offer
                        </div>
                        <ul>
                          <li>
                            <p>Branding Strategy development</p>
                          </li>
                          <li>
                            <p>Social media marketing</p>
                          </li>
                          <li>
                            <p>Lead generation</p>
                          </li>
                          <li>
                            <p>Search engine optimization</p>
                          </li>
                          <li>
                            <p>Pay per click management</p>
                          </li>
                          <li>
                            <p>Google Ad words management</p>
                          </li>
                          <li>
                            <p>Email marketing</p>
                          </li>
                          <li>
                            <p>Content Marketing</p>
                          </li>
                          <li>
                            <p>Mobile Marketing</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="inner-sr-text-img">
                        <img src={offer} alt="Offer GIF" />
                      </div>
                    </div>
                  </div>

                  <div className="row mt3">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="inner-sr-text-img">
                        <img src={keyFeature} className="keyfeature" />
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                      <div className="inner-sr-text-img highlights">
                        <div className="number4">
                          <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="main-inner-services-titiel">
                          Our key features
                        </div>
                        <ul>
                          <li>
                            <p>We connect you to the right Target Audience</p>
                          </li>
                          <li>
                            <p>
                              We offer best in class digital marketing solutions
                              for B2B and B2C industries
                            </p>
                          </li>
                          <li>
                            <p>
                              We help you in branding and promotional activities
                              using optimal digital marketing solutions
                            </p>
                          </li>
                          <li>
                            <p>
                              We assist you in Generate Leads, sales and client
                              interaction.
                            </p>
                          </li>
                          <li>
                            <p>
                              Our SEO experts can handle diverse SEO situations.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="star4">
                <img src="images/shape-2.png" />
                <img src={shape2} />
              </div>

              <div className="tnb5 ser-bg">
                <div className="container">
                  <div className="heading-top-innner">
                    <div className="small-heading">
                      <h4>Consulting</h4>
                    </div>
                    <div className="big-heading">
                      <h5>Technology Consulting</h5>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                      <div className="inner-sr-text">
                        <img src={technologyConsulting} />

                        <p>
                          Are you unclear which software technologies are best
                          for your business? Do you want to reduce the amount of
                          time and money spent on your software development
                          project?
                        </p>
                        <br />
                        <p>
                          Choose the technology consulting services of Neosao
                          Services Private Limited. Our software consulting
                          company in India offers companies result-oriented
                          technical advice on everything from challenging
                          software development problems to strategic digital
                          transformation. We provide software and IT consulting
                          services for all advanced technology, including
                          artificial intelligence, machine learning, augmented
                          reality/virtual reality, the internet of things, and
                          more. The most pressing needs of innovative product
                          companies are faster time to market, a delightful
                          customer experience, and constant evolution in the
                          face of uncertainty. As an IT consulting firm, we
                          understand your problems and work together to solve
                          them. Let us focus on some common IT related concerns
                          like Safeguarding your web system from cyber threats
                          and vulnerabilities and hiring the best developer
                          within prescribed time and money constraints,
                          controlling development time and many more.
                        </p>
                        <br />
                        <p>
                          Following the requirement review, we recommend the
                          best platform, vocabulary, and frameworks for building
                          your technical solution, as well as enumerating the
                          steps to keep the solution current. Our risk
                          management framework is based on a diverse set of
                          monitoring process expertise that allows us to
                          translate our assurance service reports into "company"
                          language, resulting in faster control implementation.
                        </p>
                      </div>
                    </div>

                    <div className="row mt3">
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-sr-text-img highlights">
                          <div className="number4">
                            <i className="fa fa-key" aria-hidden="true"></i>
                          </div>
                          <div className="main-inner-services-titiel">
                            We help you in
                          </div>
                          <ul>
                            <li>
                              <p>
                                Analysis and scaling of existing technologies
                              </p>
                            </li>
                            <li>
                              <p>
                                Assist in the creation of technology priorities.
                              </p>
                            </li>
                            <li>
                              <p>Suggestions for development channels</p>
                            </li>
                            <li>
                              <p>
                                Assessment, management, and controls for IT
                                risks
                              </p>
                            </li>
                            <li>
                              <p>Risk management for information security</p>
                            </li>
                            <li>
                              <p>Security awareness and data loss prevention</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-12">
                        <div className="inner-sr-text-img">
                          <img src={help} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* MAIN INNER SERVICE */}

      <div className="top-addrsss animatedParent tnb5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="top-details">
                <div className="top-details-icon">
                  <FaPhone />
                </div>
                <div className="top-details-text">
                  <h3>
                    +91-231 355 0197
                    <br />
                    +91-7038 31 7038
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="top-details">
                <div className="top-details-icon">
                  <FaEnvelope />
                </div>
                <div className="top-details-text">
                  <h3>support@neosao.com</h3>
                  <p>15 Hours Real Time Support</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="top-details">
                <div className="top-details-icon">
                  <FaMap />
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
    </>
  );
};

export default ServicesContent;
