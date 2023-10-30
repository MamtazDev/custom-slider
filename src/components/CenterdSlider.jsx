import React from "react";
import Slider from "react-slick";
import CenterdVideoSlider from "./centerdSlider/CenterdVideoSlider";

const CenterdSlider = () => {
  const settings = {
    className: "center",
    dots: false,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 2000,

  };
  return (
    <div className="centered_slider my-5">
      <div className="container">
        <h1 className="text-center mb-5">Centered Slider</h1>
        <Slider {...settings}>
          <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/CSHOiUYHD9k?si=9-8U88msnqR7m_OS'} />
          <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/Cv2H3nFk4As?si=szWTpGUv8WPsiSwd'} />
          <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/t5tAsV2YESo?si=WKQilG0AUWEf1kvg'} />
          <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/yIv5VJeROl8?si=eWxMZt2lPKA1bHa5'} />
          <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/AwrZoNgM6HU?si=aStCONkwOX1y9JCW'} />
          <CenterdVideoSlider videSrc={'https://www.youtube.com/embed/gjqMIQyKK7k?si=o8bTL3SdSSn5jfMc'} />
        </Slider>
      </div>
    </div>
  );
};

export default CenterdSlider;
