// import React from "react";
// import pp1 from "../assets/pp1.jfif";
// import pp2 from "../assets/pp2.jfif";
// import pp3 from "../assets/pp3.jfif";
// import pp4 from "../assets/pp4.jfif";
// import pp5 from "../assets/pp5.jfif";
// import pp6 from "../assets/pp6.jfif";
// import pp7 from "../assets/pp7.jfif";
// import pp8 from "../assets/pp8.jfif";
// import pp9 from "../assets/pp9.jfif";
// import pp10 from "../assets/pp10.jfif";
// import pp11 from "../assets/pp11.jfif";
// import pp12 from "../assets/pp12.jfif";
// import pp13 from "../assets/pp13.jfif";
// import Slider from "react-slick";

// const Multislider = () => {
//   const pictures = [
//     pp1,
//     pp3,
//     pp2,
//     pp4,
//     pp5,
//     pp13,
//     pp6,
//     pp7,
//     pp8,
//     pp11,
//     pp9,
//     pp10,
//     pp12,

//   ];
//   var settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="multi_slider">
//       <div className="container">
//         <h1 className="text-center my-5">Multi Slider</h1>
//         <Slider {...settings}>
//           <div className="position-absolute top-50">

//               <h2>
//               Et tellement d'autres <br />
//               beaux moments
//               </h2>
//               <p>
//                 Des cours de cuisine, au karaoké en passant <br /> par le canoë et le lancer de haches, on ne <br /> s'ennuie pas chez Pictarine ! Et il y en a pour <br /> tous les goûts.
//               </p>

//           </div>
//           {pictures.map((data, index) => (

//             <div className={index % 2 == 0 ? "top" : "bottom"} key={index}>
//               <img className="img-fluid" src={data} alt="" />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Multislider;

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

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Multislider = () => {
  const pictures = [pp1, pp3, pp2, pp4, pp5, pp13, pp6, pp7, pp8, pp11, pp9, pp10, pp12];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
  
  // Custom arrow component for the "Previous" button
  function CustomPrevArrow(props) {
    const { currentSlide } = props;
    if (currentSlide === 0) {
      return null;
    }
    return (
      <button {...props} className="slick-arrow custom-prev-arrow border-0">
        <FaChevronLeft />
      </button>
    );
  }

  // Custom arrow component for the "Next" button
  function CustomNextArrow(props) {
    const { currentSlide, slideCount } = props;
    if (currentSlide === slideCount - 3) {
      return null; // Hide the "Next" arrow on the last slide
    }
    return (
      <button {...props} className="slick-arrow custom-next-arrow border-0">
        <FaChevronRight />
      </button>
    );
  }

  return (
    <div className="multi_slider position-relative">
      <div className="container">
        <h1 className="text-center my-5">Multi Slider</h1>
        <Slider {...settings}>
          <div className="position-absolute top-50">
            <h2>
              Et tellement d'autres <br />
              beaux moments
            </h2>
            <p>
              Des cours de cuisine, au karaoké en passant <br /> par le canoë et le lancer de haches, on ne <br /> s'ennuie pas chez Pictarine ! Et il y en a pour <br /> tous les goûts.
            </p>
          </div>
          {pictures.map((data, index) => (
            <div className={index % 2 === 0 ? "top" : "bottom"} key={index}>
              <img className="img-fluid" src={data} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Multislider;
