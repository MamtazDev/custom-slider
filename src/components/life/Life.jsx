import React, { useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Life.css';
import sliderImgOne from '../../assets/2012.webp';
import sliderImgTwo from '../../assets/2013.webp';
import sliderImgThree from '../../assets/2016.webp';
import sliderImgFour from '../../assets/2019.webp';
import sliderImgFive from '../../assets/2020.webp';
import sliderImgSix from '../../assets/2021.webp';
import sliderImgSeven from '../../assets/2023.webp';
import LifeSlider from '../lifeSlider/LifeSlider';

const Life = () => {

    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // infinite: true,

                    dots: true,
                }
            },
            // {
            //     breakpoint: 600,
            //     settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 2,
            //         initialSlide: 2
            //     }
            // },
            // {
            //     breakpoint: 480,
            //     settings: {
            //         slidesToShow: 1,
            //         slidesToScroll: 1
            //     }
            // }
        ]
    };

    return (
        <div className='custom_slidr'>
            <div className='container'>
                <h1 className='text-center mb-5'>Custom Slider</h1>
                <Slider {...settings}>

                    {/* 2012 */}
                    <LifeSlider
                        sliderImg={sliderImgOne}
                        h3={"Les premiers pas"}
                        p={"Guillaume et Max intègrent TechStars, le plus grand réseau d’entrepreneurs au monde et s’envolent pour Chicago."}
                    />

                    {/* 2013 */}
                    <LifeSlider
                        sliderImg={sliderImgTwo}
                        h3={"Le premier partenaire : Walgreens"}
                        p={"Signature avec Walgreens, l’une des plus grosses chaînes de drugstore aux Etats-Unis. Nous amenons du traffic dans les 9 021 magasins partenaires grâce à notre offre de “pick up in store” de commandes photos. Cela facilite la vie de nos clients et cela leur évitent d’utiliser des bornes de commande."}
                    />

                    {/* 2016 */}
                    <LifeSlider
                        sliderImg={sliderImgThree}
                        h3={"2 millions de clients"}
                        p={"Nous ajoutons une option de livraison à domicile dans notre application avec la signature d’un nouveau partenaire : DPI et nous franchissons le cap des 2 millions de clients."}
                    />

                    {/* 2019 */}
                    <LifeSlider
                        sliderImg={sliderImgFour}
                        h3={"À la conquête d’un autre partenaire… CVS"}
                        p={"CVS et son réseau de 9751 pharmacies viennent s’ajouter à la liste de nos magasins partenaires. Nous comptons désormais 3 options de livraison : chez Walgreens, CVS ou à domicile."}
                    />

                    {/* 2020 */}
                    <LifeSlider
                        sliderImg={sliderImgFive}
                        h3={"Jamais 2 sans 3 : signature de Walmart"}
                        p={"Pourquoi s’arrêter là lorsque nous pouvons faire plus ? L’année 2020 marque la signature d’un troisième partenaire : Walmart, le géant américain de la distribution."}
                    />

                    {/* 2021 */}
                    <LifeSlider
                        sliderImg={sliderImgSix}
                        h3={"L’opération Calamar"}
                        p={"Cette année nous avons eu l’audace de réécrire nos apps from scratch tant au niveau visuel que tech. Ne jamais se reposer sur ses lauriers, c’est notre devise."}
                    />

                    {/* 2023 */}
                    <LifeSlider
                        sliderImg={sliderImgSeven}
                        h3={"On continue de grandir"}
                        p={"Des nouveaux locaux de 1 600m² pour une team en pleine croissance !Et quels locaux ! Salle de sport, amphithéâtre, salle de sieste... On s'y sent comme à la maison."}
                    />


                </Slider>
            </div>
        </div>
    )
}

export default Life