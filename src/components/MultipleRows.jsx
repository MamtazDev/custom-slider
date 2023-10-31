import React, { useRef, useState } from "react";
import Slider from "react-slick";
import MultiRowSlider from "./multiRowSlider/MultiRowSlider";

const MultipleRows = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    className: "center",
    arrows: true,
    dots: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}>
          {dots.map((dot, index) => (
            <li key={index} className={index === settings.current ? "active-dot" : ""}>
              {dot}
            </li>
          ))}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: '#a4a4a4',
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="multiRows_slider position-relative">
      <div className="container">
        <h1 className="text-center mb-5">Multiple Rows Slider</h1>

        <div className="custom-arrows">
          <div className='leftArrow position-absolute'>
            <button
              className={currentSlide === 0 ? 'sliderArrowDisable' : '  sliderArrowActive'}
              onClick={handlePrevClick}
              disabled={currentSlide === 0}
            >
              <svg className="styles_svg__gAVlP" viewBox="0 0 16 17"><path d="M7.96875 16.4688C9.05729 16.4688 10.0807 16.2604 11.0391 15.8438C12.0026 15.4271 12.8516 14.8516 13.5859 14.1172C14.3203 13.3828 14.8958 12.5365 15.3125 11.5781C15.7292 10.6146 15.9375 9.58854 15.9375 8.5C15.9375 7.41146 15.7292 6.38802 15.3125 5.42969C14.8958 4.46615 14.3203 3.61719 13.5859 2.88281C12.8516 2.14844 12.0026 1.57292 11.0391 1.15625C10.0755 0.739583 9.04948 0.53125 7.96094 0.53125C6.8724 0.53125 5.84635 0.739583 4.88281 1.15625C3.92448 1.57292 3.07812 2.14844 2.34375 2.88281C1.61458 3.61719 1.04167 4.46615 0.625 5.42969C0.208333 6.38802 0 7.41146 0 8.5C0 9.58854 0.208333 10.6146 0.625 11.5781C1.04167 12.5365 1.61719 13.3828 2.35156 14.1172C3.08594 14.8516 3.93229 15.4271 4.89062 15.8438C5.85417 16.2604 6.88021 16.4688 7.96875 16.4688ZM9.51562 12.3594C9.41146 12.4583 9.27344 12.5052 9.10156 12.5C8.9349 12.4948 8.79688 12.4401 8.6875 12.3359L5.42969 9.26562C5.28385 9.13021 5.1849 8.96875 5.13281 8.78125C5.08594 8.59375 5.08594 8.40625 5.13281 8.21875C5.1849 8.03125 5.28385 7.86979 5.42969 7.73438L8.6875 4.67188C8.80729 4.55729 8.94531 4.4974 9.10156 4.49219C9.26302 4.48698 9.39844 4.53906 9.50781 4.64844C9.6276 4.75781 9.6901 4.89583 9.69531 5.0625C9.70052 5.22917 9.64323 5.36979 9.52344 5.48438L6.3125 8.5L9.52344 11.5234C9.63802 11.6328 9.69531 11.7708 9.69531 11.9375C9.69531 12.1042 9.63542 12.2448 9.51562 12.3594Z"></path></svg>
            </button>
          </div>

          <div className="rightArrow position-absolute">
            <button
              className={currentSlide === 6 ? 'sliderArrowDisable' : 'sliderArrowActive'}
              onClick={handleNextClick}
              disabled={currentSlide === 6}
            >
              <svg className="styles_svg__Y_I_5" viewBox="0 0 17 17"><path d="M8.90625 16.4688C9.99479 16.4688 11.0182 16.2604 11.9766 15.8438C12.9401 15.4271 13.7891 14.8516 14.5234 14.1172C15.2578 13.3828 15.8333 12.5365 16.25 11.5781C16.6667 10.6146 16.875 9.58854 16.875 8.5C16.875 7.41146 16.6667 6.38802 16.25 5.42969C15.8333 4.46615 15.2578 3.61719 14.5234 2.88281C13.7891 2.14844 12.9401 1.57292 11.9766 1.15625C11.013 0.739583 9.98698 0.53125 8.89844 0.53125C7.8099 0.53125 6.78385 0.739583 5.82031 1.15625C4.86198 1.57292 4.01562 2.14844 3.28125 2.88281C2.55208 3.61719 1.97917 4.46615 1.5625 5.42969C1.14583 6.38802 0.9375 7.41146 0.9375 8.5C0.9375 9.58854 1.14583 10.6146 1.5625 11.5781C1.97917 12.5365 2.55469 13.3828 3.28906 14.1172C4.02344 14.8516 4.86979 15.4271 5.82812 15.8438C6.79167 16.2604 7.81771 16.4688 8.90625 16.4688ZM7.0625 12.4922C6.9375 12.3672 6.875 12.2214 6.875 12.0547C6.875 11.8828 6.9349 11.7396 7.05469 11.625L10.3672 8.50781L7.05469 5.39844C6.92969 5.28385 6.86979 5.14062 6.875 4.96875C6.88021 4.79688 6.94531 4.65104 7.07031 4.53125C7.1849 4.41667 7.32292 4.36458 7.48438 4.375C7.65104 4.38021 7.79688 4.44271 7.92188 4.5625L11.2734 7.71094C11.4297 7.85156 11.5312 8.02083 11.5781 8.21875C11.6302 8.41146 11.6302 8.60677 11.5781 8.80469C11.5312 8.9974 11.4297 9.16406 11.2734 9.30469L7.92188 12.4609C7.80729 12.5703 7.66146 12.6276 7.48438 12.6328C7.30729 12.638 7.16667 12.5911 7.0625 12.4922Z"></path></svg>
            </button>
          </div>
        </div>

        <Slider {...settings} ref={sliderRef}>
          <MultiRowSlider
            name={"Data Engineer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Faciliter l'accès à la data"}
            pointTwo={"• Co-construire des solutions"}
            pointThree={"• Orchestrer le flux de données"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead Legal Counsel"}
            des={"Team Finance"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Problem-solver"}
            pointTwo={"• Etre référent sur toute la partie légale"}
            pointThree={"• Responsable Propriété Intellectuelle et Données"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead People Acquisition"}
            des={"Team People"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Accompagner les peoples"}
            pointTwo={"• Denicher les meilleurs talents"}
            pointThree={"• Faire rayonner les valeurs de Pictarine"}
            pointFour={"• Faire vivre une expérience candidat incroyable"}
            link={"#"}
          />

          <MultiRowSlider
            name={"Talent Acquisition Partner"}
            des={"Team People"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Faire vivre une expérience candidat incroyable"}
            pointTwo={"• Denicher les meilleurs talents"}
            pointThree={"• Faire rayonner les valeurs de Pictarine"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Front Web Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Améliorer nos apps"}
            pointTwo={"• Développer vite et bien"}
            pointThree={"• Problem-solver"}
            pointFour={"• Tester des nouvelles technos"}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead People Development"}
            des={"Team People"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Career path"}
            pointTwo={"• Pictarine Academy"}
            pointThree={"• Accompagner les peoples"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead Product Designer"}
            des={"Team Produit"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Contribuer au design des produits"}
            pointTwo={"• Être créatif"}
            pointThree={"• Construire et superviser une équipe"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Lead iOS Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Développer vite et bien"}
            pointTwo={"• Encadrer des développeurs"}
            pointThree={"• Être responsable de la production"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Backend Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Concevoir des datas models"}
            pointTwo={"• Tester des nouvelles technos"}
            pointThree={"• Résoudre des problématiques"}
            pointFour={""}
            link={"#"}
          />

          <MultiRowSlider
            name={"Senior iOS Developer"}
            des={"Team Engineering"}
            location={"Toulouse"}
            cdi={"CDI"}
            pointsTitle={"En quelques points..."}
            pointOne={"• Développer vite et bien"}
            pointTwo={"• Inspirer les autres développeurs"}
            pointThree={"• Superviser les apps de production"}
            pointFour={""}
            link={"#"}
          />
        </Slider>
      </div>
    </div>
  );
};

export default MultipleRows;
