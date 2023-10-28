import React from "react";
import pp1 from "../assets/pp1.jfif";
import pp2 from "../assets/pp2.jfif";
import pp3 from "../assets/pp3.jfif";
import pp4 from "../assets/pp4.jfif";
import pp5 from "../assets/pp5.jfif";
import pp6 from "../assets/pp6.jfif";
import pp7 from "../assets/pp7.jfif";
import pp8 from "../assets/pp8.jfif";
import pp9 from "../assets/pp9.jfif";
import pp10 from "../assets/pp10.jfif";
import pp11 from "../assets/pp11.jfif";
import pp12 from "../assets/pp12.jfif";
import pp13 from "../assets/pp13.jfif";
import Slider from "react-slick";

const Multislider = () => {
  const pictures = [
    pp1,
    pp3,
    pp2,
    pp4,
    pp5,
    pp13,
    pp6,
    pp7,
    pp8,
    pp11,
    pp9,
    pp10,
    pp12,

  ];
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="multi_slider">
      <div className="container">
        <h1 className="text-center my-5">Multi Slider</h1>
        <Slider {...settings}>
          {pictures.map((data, index) => (
            <div className={index%2 == 0 ? "top" : "bottom"} key={index}>
              <img className="img-fluid" src={data} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Multislider;
