import React from "react";
import CenterdVideoSlider from "./centerdSlider/CenterdVideoSlider";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const CenterdSlider = () => {

  return (
    <div className="centered_slider">
      <div className="container">
        <h1 className="text-center mb-5">Centered Slider</h1>
        <Swiper
          slidesPerView={3.2}
          centeredSlides={true} // Center the slides
          spaceBetween={30} // Remove the gap between slides
          loop={true}
          navigation={{
            clickable: true
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/CSHOiUYHD9k?si=9-8U88msnqR7m_OS'} />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/Cv2H3nFk4As?si=szWTpGUv8WPsiSwd'} />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/t5tAsV2YESo?si=WKQilG0AUWEf1kvg'} />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/yIv5VJeROl8?si=eWxMZt2lPKA1bHa5'} />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/AwrZoNgM6HU?si=aStCONkwOX1y9JCW'} />
          </SwiperSlide>

          <SwiperSlide>
            <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/gjqMIQyKK7k?si=o8bTL3SdSSn5jfMc'} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default CenterdSlider;
