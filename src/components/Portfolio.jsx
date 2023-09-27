import React, { useState } from 'react'
import '../assets/style/portfolio.css'
import '../assets/style/Responsiveness.css'
import { Link } from 'react-router-dom'
import rocket from '../assets/images/rocket.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import cloud1 from '../assets/images/cloud1.png'
import screen17 from '../assets/images/screen-17.png'
// import screen23 from '../assets/images/screen-23.png'
// import screen24 from '../assets/images/screen-24.png'
import screen18 from '../assets/images/screen-18.png'
import screen20 from '../assets/images/screen-20.png'
import screen21 from '../assets/images/screen-21.png'
import screen19 from '../assets/images/screen-19.png'
import screen1 from '../assets/images/screen-1.png'
// import screen16 from '../assets/images/screen-16.png'
// import screen15 from '../assets/images/screen-15.png'
import screen2 from '../assets/images/screen-2.png'
import screen3 from '../assets/images/screen-3.png'
import screen4 from '../assets/images/screen-4.png'
import screen5 from '../assets/images/screen-5.png'
import screen6 from '../assets/images/screen-6.png'
import screen7 from '../assets/images/screen-7.png'
import screen8 from '../assets/images/screen-8.png'
import screen9 from '../assets/images/screen-9.png'
import screen10 from '../assets/images/screen-10.png'
import screen11 from '../assets/images/screen-11.png'
import screen12 from '../assets/images/screen-12.png'
import dp1 from '../assets/images/dp-1.jpg'
import screen13 from '../assets/images/screen-13.png'
import screen14 from '../assets/images/screen-14.png'
import dwp1 from '../assets/images/dwp-1.jpg'
import webtemp from '../assets/images/web-temp.jpg'
import ap11 from '../assets/images/ap-11.jpg'
import ap12 from '../assets/images/ap-12.jpg'
import ap9 from '../assets/images/ap-9.jpg'
import lp8 from '../assets/images/lp-8.jpg'
import lp6 from '../assets/images/lp-6.jpg'
import lp1 from '../assets/images/lp-1.jpg'
import lp3 from '../assets/images/lp-3.jpg'
import lp4 from '../assets/images/lp-4.jpg'
import lp10 from '../assets/images/lp-10.jpg'
import parra from '../assets/images/parra-icn.png'
// import screen22 from '../assets/images/screen-22.png'
// import ap1 from '../assets/images/ap-1.png'
// import dp2 from '../assets/images/dp-2.jpg'
// import lp11 from '../assets/images/lp-11.jpg'
// import noImage from '../assets/images/no-ad.jpg'
import { FaPhone, FaEnvelope, FaMap } from "react-icons/fa";
// import Header from './Header'
// In your 'Portfolio' page component
import InnerHeader from '../components/InnerHeader'


const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterClick = (value) => {
        setActiveFilter(value);
        if (value === 'all') {
            // Show all items
            document.querySelectorAll('.filter').forEach((item) => {
                item.style.display = 'block';
            });
        } else {
            // Hide items not matching the filter and show those that match
            document.querySelectorAll('.filter').forEach((item) => {
                if (!item.classList.contains(value)) {
                    item.style.display = 'none';
                } else {
                    item.style.display = 'block';
                }
            });
        }
    };


    return (


        <>

            <InnerHeader />

            <div className="inner-header" id='portfolio-main' >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="inner-text">
                                <div className="img">
                                    <img src={rocket} alt="Rocket" />
                                </div>
                                <h5>
                                    Check Our Work<br />
                                    <span>
                                        <Link to='/'> Home </Link> | Portfolio
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

            <div className="portfolio tnb7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="portfolio-text">
                                <div className="container">
                                    <div className="row">
                                        <div className="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div align="center">

                                                <button
                                                    className={`btn btn-default filter-button${activeFilter === 'all' ? ' active' : ''}`}
                                                    data-filter="all"
                                                    onClick={() => handleFilterClick('all')}> All&nbsp;&nbsp;&nbsp;/</button>

                                                <button
                                                    className={`btn btn-default filter-button${activeFilter === 'web' ? ' active' : ''}`}
                                                    data-filter="web"
                                                    onClick={() => handleFilterClick('web')}> Web Development&nbsp;&nbsp;&nbsp;/ </button>

                                                <button
                                                    className={`btn btn-default filter-button${activeFilter === 'dev' ? ' active' : ''}`}
                                                    data-filter="dev"
                                                    onClick={() => handleFilterClick('dev')}> Website&nbsp;&nbsp;&nbsp;/</button>

                                                <button
                                                    className={`btn btn-default filter-button${activeFilter === 'app' ? ' active' : ''}`}
                                                    data-filter="app"
                                                    onClick={() => handleFilterClick('app')}> Mobile App Development&nbsp;&nbsp;&nbsp;/</button>

                                                <button
                                                    className={`btn btn-default filter-button${activeFilter === 'logos' ? ' active' : ''}`}
                                                    data-filter="logos"
                                                    onClick={() => handleFilterClick('logos')}> Logos&nbsp;&nbsp;</button>


                                                {/* <button className="btn btn-default filter-button" data-filter="all"> All</button>
                                                <button className="btn btn-default filter-button" data-filter="web"> Website</button>
                                                <button className="btn btn-default filter-button" data-filter="dev"> Web Development</button>
                                                <button className="btn btn-default filter-button" data-filter="app"> Mobile App Development</button>
                                                <button className="btn btn-default filter-button" data-filter="logos"> Logos</button> */}
                                            </div>
                                        </div>



                                        <>
                                        
                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="#">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen17} className="img-responsive" alt="Selvesingh" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Selvesingh</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={webtemp} className="img-responsive" alt="Dr. Kshama Kulhalli" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Dr. Kshama Kulhalli</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={webtemp} className="img-responsive" alt="Morya Enterprises" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Morya Enterprises</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen18} className="img-responsive" alt="Deendari" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Deendari</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen20} className="img-responsive" alt="Cricstream Predict" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Cricstream Predict</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen21} className="img-responsive" alt="The Mankind" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>The Mankind</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen19} className="img-responsive" alt="osa enviro" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>osa enviro</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen1} className="img-responsive" alt="Deltron" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Deltron</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '7s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={webtemp} className="img-responsive" alt="Locals hub" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Locals hub</h5>
                                                            <h6>UAE</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '7s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={webtemp} className="img-responsive" alt="eGstGovt" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>eGstGovt</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen2} className="img-responsive" alt="Tour Booking" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Tour Booking</h5>
                                                            <h6>Malaysia</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen3} className="img-responsive" alt="BMintel" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>BMintel</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen4} className="img-responsive" alt="Anos" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Anos</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '0.4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen5} className="img-responsive" alt="Tandoor" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Tandoor</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen6} className="img-responsive" alt="Catlee" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Catlee</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen7} className="img-responsive" alt="True Date" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>True Date</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen8} className="img-responsive" alt="Myvegiz" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Myvegiz</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen9} className="img-responsive" alt="Dehaati" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Dehaati</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '5s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen10} className="img-responsive" alt="Dum Rice n More" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Dum Rice n More</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '6s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen11} className="img-responsive" alt="AB Hotels" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>AB Hotels</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '7s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen12} className="img-responsive" alt="Rolls Rice" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Rolls Rice</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '8.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={dp1} className="img-responsive" alt="Vouchershop" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Vouchershop</h5>
                                                            <h6>Australia</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '8s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery screen">
                                                            <img src={screen13} className="img-responsive" alt="Origin Masala" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Origin Masala</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '8.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img screen">
                                                        <div className="img-gallery">
                                                            <img src={screen14} className="img-responsive" alt="Virtnexuus" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Virtnexuus</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '8.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Charcoal Chicken Randwick" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Charcoal Chicken Randwick</h5>
                                                            <h6>Australia</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter web" style={{ transition: '8.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img screen">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="1nation" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>1nation</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev" style={{ transition: '8.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={dp1} className="img-responsive" alt="Vouchershop" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Vouchershop</h5>
                                                            <h6>Australia</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev app" style={{ transition: '1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen6} className="img-responsive" alt="Catlee" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Catlee</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '0.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen4} className="img-responsive" alt="Anos" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Anos</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '7s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Locals hub" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Locals hub</h5>
                                                            <h6>UAE</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev app" style={{ transition: '3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen8} className="img-responsive" alt="Myvegiz" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Myvegiz</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev" style={{ transition: '8s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen13} className="img-responsive" alt="Origin Masala" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Origin Masala</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev app" style={{ transition: '8.4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={dwp1} className="img-responsive" alt="Compito" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Compito</h5>
                                                            <h6>UAE</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev app" style={{ transition: '9.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Courier & Logistics Managment" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Courier & Logistics Managment</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev" style={{ transition: '9.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Chartedbulls" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Chartedbulls</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev" style={{ transition: '8.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Charcoal Chicken Randwick" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Charcoal Chicken Randwick</h5>
                                                            <h6>Australia</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter dev" style={{ transition: '8.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen14} className="img-responsive" alt="Virtnexuus" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Virtnexuus</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '9.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={ap12} className="img-responsive" alt="Janata Bazar" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Janata Bazar</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '9.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Click2Courier" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Click2Courier</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '9.4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={ap9} className="img-responsive" alt="QTP" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>QTP</h5>
                                                            <h6>UAE</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '10.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={ap11} className="img-responsive" alt="ANB News" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>ANB News</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '8s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen13} className="img-responsive" alt="Origin Masala" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Origin Masala</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen7} className="img-responsive" alt="True Date" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>True Date</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter app" style={{ transition: '0.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={screen19} className="img-responsive" alt="osa enviro" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>osa enviro</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '10.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={lp8} className="img-responsive" alt="Neosao" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Neosao</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '10.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={lp6} className="img-responsive" alt="Myvegiz" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Myvegiz</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '10.4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Atomic Brain" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Atomic Brain</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '11.1s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={lp1} className="img-responsive" alt="Anos" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Anos</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '11.2s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={lp3} className="img-responsive" alt="ANB News" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>ANB News</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '11.3s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={lp4} className="img-responsive" alt="Catlee" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Catlee</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '11.4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={lp10} className="img-responsive" alt="True Dates" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>True Dates</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                            <div className="gallery_product col-lg-3 col-md-3 col-sm-6 col-xs-12 filter logos" style={{ transition: '11.4s' }}>
                                                <a href="">
                                                    <div className="gallery-img">
                                                        <div className="img-gallery">
                                                            <img src={webtemp} className="img-responsive" alt="Deendari" />
                                                        </div>
                                                        <div className="galler-text">
                                                            <h5>Deendari</h5>
                                                            <h6>India</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>

                                        </>



                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="parra1">
                    <img src={parra} alt="Parra Icon" />
                </div>
            </div>

            <div className="top-addrsss animatedParent tnb5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="top-details">
                                <div className="top-details-icon">
                                    <FaPhone />
                                </div>
                                <div className="top-details-text">
                                    <h3>+91-231 355 0197<br />+91-7038 31 7038</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-xs-12">
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
                        <div className="col-md-4 col-sm-12 col-xs-12">
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

            <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>



        </>
    )
}

export default Portfolio