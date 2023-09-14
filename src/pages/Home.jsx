import React, { useEffect } from 'react'
import MainSlider from '../components/MainSlider'
import Career from '../components/Career'
import Services from '../components/Services'
import AboutUs from '../components/AboutUs'
import WhyUs from '../components/WhyUs'
import VideoTab from '../components/VideoTab'
import Testimonial from '../components/Testimonial'
import TopFooter from '../components/TopFooter'
import Cloud from '../components/Cloud'
import '../assets/style/Responsiveness.css'
import Header from '../components/Header'
const Home = () => {
    return (
        <>
            <Header />
            <div id='home-main'>
                <MainSlider />
                <Cloud />
                <AboutUs />
                <WhyUs />
                <Services />
                <VideoTab />
                <Testimonial />
                <Career />
                <TopFooter />
            </div>
        </>
    )
}

export default Home