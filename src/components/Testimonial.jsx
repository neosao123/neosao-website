import React from 'react'
import '../assets/style/testimonial.css'
import '../assets/style/Responsiveness.css'
// import '../assets/style/animation.css'
import kulkarni from '../assets/images/kulkarni.png'
import shivam from '../assets/images/shivam_pandey.png'
import tejas from '../assets/images/tejas_kothari.png'
import shape5 from '../assets/images/shape-5.png'

// SWIPER

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination, Autoplay } from 'swiper/modules';

// SEIPER

const Testimonial = () => {
  return (
    <>




      <div className="testi-main tnb">
        <div className="container">
          <div className="small-heading">
            <h4>Testimonial</h4>
          </div>
          <div className="big-heading">
            <h5>Our Client Says</h5>
          </div>
          <div className="testimonials">

            {/* SWIPER */}

            <Swiper
              slidesPerView={2}
              spaceBetween={30}
              autoplay={{ delay: 2000 }}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >

              {/* SLIDE-1 */}
              <SwiperSlide>
                
                  <div className="testi-text">
                    <p>"Excellent customer service , On time deployment of Projects."</p>
                    <img src={kulkarni} alt="Raghunandan Kulkarni" />
                    <h4>Raghunandan Kulkarni</h4>
                  </div>
                
              </SwiperSlide>

              {/* SLIDE-2 */}
              <SwiperSlide>
                
                  <div className="testi-text">
                    <p>"Excellent development team. They put extra efforts in completing the tasks unlike others who just complain about timings and budget."</p>
                    <img src={shivam} alt="Shivam Pandey" />
                    <h4>Shivam Pandey</h4>
                  </div>
                
              </SwiperSlide>

              {/* SLIDE-3 */}
              <SwiperSlide>
                
                  <div className="testi-text">
                    <p>"Dedicated web, android app development team."</p>
                    <img src={tejas} alt="Tejas Kothari" />
                    <h4>Tejas Kothari</h4>
                  </div>
                
              </SwiperSlide>

              {/* SLIDE-4 */}
              <SwiperSlide>
                
                  <div className="testi-text">
                    <p>"Exceptional technology company. Immensely knowledgeable, professional and committed. Shubham and his team knows how to deliver great projects with minimal errors & on time delivery. We strongly recommend Neosao for all your tech needs. Grt Job!"</p>
                    <h4>VirtNexus Technologies</h4>
                  </div>
                
              </SwiperSlide>
            </Swiper>

            {/* SWIPER END */}



            {/* ORIGINAL */}

            {/* <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="testi-text">
                <p>"Excellent customer service , On time deployment of Projects."</p>
                <img src={kulkarni} alt="Raghunandan Kulkarni" />
                <h4>Raghunandan Kulkarni</h4>
              </div>
            </div>



            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="testi-text">
                <p>"Excellent development team. They put extra efforts in completing the tasks unlike others who just complain about timings and budget."</p>
                <img src={shivam} alt="Shivam Pandey" />
                <h4>Shivam Pandey</h4>
              </div>
            </div>






            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="testi-text">
                <p>"Dedicated web, android app development team."</p>
                <img src={tejas} alt="Tejas Kothari" />
                <h4>Tejas Kothari</h4>
              </div>
            </div>


            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="testi-text">
                <p>"Exceptional technology company. Immensely knowledgeable, professional and committed. Shubham and his team knows how to deliver great projects with minimal errors & on time delivery. We strongly recommend Neosao for all your tech needs. Grt Job!"</p>
                <h4>VirtNexus Technologies</h4>
              </div>
            </div> */}

            {/* OROGINAL */}

          </div>
        </div>
        <div className="star3">
          <img src={shape5} alt="Star" />
        </div>
      </div>

    </>

  )
}

export default Testimonial