import React from 'react';
import Slider from 'react-slick';
import MultiRowSlider from './multiRowSlider/MultiRowSlider';

const MultipleRows = () => {
  const settings = {
    className: "center",
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  return (
    <div className="multiRows_slider">
      <div className="container">
        <h1 className="text-center mb-5">Multiple Rows Slider</h1>
        <Slider {...settings}>
          <MultiRowSlider />
        </Slider>
      </div>
    </div>
  );
};

export default MultipleRows;