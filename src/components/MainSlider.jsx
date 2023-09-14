import React from 'react'
import '../assets/style/mainslider.css'
// import '../assets/style/Responsiveness.css'
import '../assets/style/animation.css'
import justBanner from '../assets/images/just_banner.png'
import justBanner1 from '../assets/images/just_banner1.png'
import justBanner2 from '../assets/images/just_banner2.png'
// import justBanner3 from '../assets/images/just_banner3.png'
import justBanner4 from '../assets/images/just_banner4.png'
import shape5 from '../assets/images/shape-5.png'
// import shape1 from '../assets/images/shape-1.png'
import star1 from '../assets/images/star-1.png'
import star2 from '../assets/images/star-2.png'
import b4six from '../assets/images/b4-dot-6.png'

// CLOUD
import '../assets/style/cloud.css'

import cloud1 from '../assets/images/cloud1.png'
import cloud2 from '../assets/images/cloud2.png'
// CLOUD-END

// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/bundle';
// Import Swiper styles


// EFFECT



const MainSlider = () => {
  return (

    <>

      <div className="main-slider" id="index">

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}

          autoplay={{ delay: 4000 }}
        // effect='fade'

        >


          {/* Slide 1 */}
          <SwiperSlide>
            <div>
              <div className="slider-img animatedParent">
                <img src={justBanner} alt="Banner 1" />
                <div className="slider-text">
                  <div className="container">
                    <h2 className="animated fadeInRight go">Quality, Flexibility,<br /> Transparency, Customizability.</h2>
                    <p className="animated fadeInUpShort go">Great solution for your business's any software requirements.</p>



                  </div>
                </div>

              </div>
            </div>
            {/* BACKGROUND */}
            <div className="shap1">
              <img src={shape5} alt="Shape 1" />
            </div>
            <div className="star1">
              <img src={star1} alt="Star 1" />
            </div>
            <div className="star2">
              <img src={star2} alt="Star 2" />
            </div>
            <div className="dot-6">
              <img src={b4six} alt="Dot 6" />
            </div>
            {/* BACKGROUND */}
          </SwiperSlide>


          {/* Slide 2 */}
          <SwiperSlide>
            <div>
              <div className="slider-img animatedParent">
                <img src={justBanner1} alt="Banner 2" />
                <div className="slider-text">
                  <div className="container">
                    <h2 className="animated fadeInRight go">We Suggest Best.</h2>
                    <p className="animated fadeInUpShort go">Come up with a basic idea and requirements only.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* BACKGROUND */}
            <div className="shap1">
          <img src={shape5} alt="Shape 1" />
        </div>
        <div className="star1">
          <img src={star1} alt="Star 1" />
        </div>
        <div className="star2">
          <img src={star2} alt="Star 2" />
        </div>
        <div className="dot-6">
          <img src={b4six} alt="Dot 6" />
        </div>
            {/* BACKGROUND */}

          </SwiperSlide>


          {/* Slide 3 */}
          <SwiperSlide>
            <div>
              <div className="slider-img animatedParent">
                <img src={justBanner2} alt="Banner 3" />
                <div className="slider-text">
                  <div className="container">
                    <h2 className="animated fadeInRight go">We Serve Best.</h2>
                    <p className="animated fadeInUpShort go">We are committed to serving you best.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* BACKGROUND */}
            <div className="shap1">
          <img src={shape5} alt="Shape 1" />
        </div>
        <div className="star1">
          <img src={star1} alt="Star 1" />
        </div>
        <div className="star2">
          <img src={star2} alt="Star 2" />
        </div>
        <div className="dot-6">
          <img src={b4six} alt="Dot 6" />
        </div>
            {/* BACKGROUND */}

          </SwiperSlide>


          {/* Slide 4 */}
          <SwiperSlide>
            <div>
              <div className="slider-img animatedParent">
                <img src={justBanner4} alt="Banner 5" />
                <div className="slider-text">
                  <div className="container">
                    <h2 className="animated fadeInRight go">We Deploy Best.</h2>
                    <p className="animated fadeInUpShort go">You will have access to all updates and free support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* BACKGROUND */}
            <div className="shap1">
          <img src={shape5} alt="Shape 1" />
        </div>
        <div className="star1">
          <img src={star1} alt="Star 1" />
        </div>
        <div className="star2">
          <img src={star2} alt="Star 2" />
        </div>
        <div className="dot-6">
          <img src={b4six} alt="Dot 6" />
        </div>
            {/* BACKGROUND */}

          </SwiperSlide>
          
        </Swiper>

        {/* SWIPER END */}
       

      </div>



    </>


  )
}

export default MainSlider