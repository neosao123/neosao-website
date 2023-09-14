import React, { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import WhyUs from '../components/WhyUs'
import About from '../components/About'
import ServicesContent from '../components/ServicesContent'
import CareerContent from '../components/careerContent'
import Privacy from '../components/Privacy'
import Terms from '../components/Terms'
import Refund from '../components/Refund'
import Error from '../components/Error'
import { Loader } from '../components/Loader'
import Footer from '../components/Footer'
import InnerHeader from '../components/InnerHeader'
import Offcanvas from '../components/Offcanvas'
import Testimonial from '../components/Testimonial'



// import Home from '../components/Home'
// import Career from '../components/Career'
// import Services from '../components/Services'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import Header from '../components/Header'
// import Footer from '../components/Footer'
// import AboutUs from '../components/AboutUs'
// import ReachUsContent from '../components/ReachUsContent'
// import Header from '../components/Header'
// import Portfolio from '../components/Portfolio'


const Home = lazy(() => import("../pages/Home"))
const AboutUs = lazy(() => import("../components/AboutUs"))
const Services = lazy(() => import('../components/Services'))
const Portfolio = lazy(() => import('../components/Portfolio'))
const Career = lazy(() => import('../components/Career'))
const ReachUsContent = lazy(() => import('../components/ReachUsContent'));





const Allroutes = () => {
    return (
        <Suspense fallback={<Loader />} >
            {/* <Header /> */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/services' element={<Services />} />
                <Route path='/career' element={<Career />} />
                <Route path='/whyus' element={<WhyUs />} />
                <Route path='/' element={<Home />} />
                <Route path='/about-content' element={<About />} />
                <Route path='/reach-us-contact' element={<ReachUsContent />} />
                <Route path='/services-contact' element={<ServicesContent />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/career-content' element={<CareerContent />} />
                <Route path='/privacy' element={<Privacy />} />
                <Route path='/term' element={<Terms />} />
                <Route path='/refund' element={<Refund />} />
                <Route path='*' element={<Error />} />
                <Route path='inner-header' element={<InnerHeader />} />
                <Route path='canvas' element={<Offcanvas />} />
                <Route path='slider' element={<Testimonial />} />
            </Routes>
            <Footer />
        </Suspense>
    )
}

export default Allroutes