import React from 'react';
import Slider from 'react-slick';
import MultiRowSlider from './multiRowSlider/MultiRowSlider';

const MultipleRows = () => {
  // const settings = {
  //   className: "center",
  //   dots: true,
  //   centerMode: true,
  //   infinite: true,
  //   centerPadding: "60px",
  //   slidesToShow: 3,
  //   speed: 500,
  //   rows: 2,
  //   slidesPerRow: 2
  // };
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
  return (
    <div className="multiRows_slider">
      <div className="container">
        <h1 className="text-center mb-5">Multiple Rows Slider</h1>
        <Slider {...settings}>
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