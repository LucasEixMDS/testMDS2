import Modalite from "page/Home/homecomponents/HomeModalite";
import HomeHeader from "./HomeHeader"
import CarousselFormationDesktop from "../../components/carrousels/CarrouselFormation/CarousselFormationDesktop"
import Question from "components/inscription/HomeCadreQuestion";
import HomeFinancement from "./homecomponents/HomeFinancement";
import HomeTemoin from "./homecomponents/HomeTemoin";
import HomeCadreTestformation from "../../components/inscription/HomeCadreTestformation";
import HomePointfort from "./homecomponents/HomePointfort";
import { Link } from "react-router-dom";
import SeoBreadcrumb from "SEOBreadcrumb";
import { Helmet } from 'react-helmet-async';
import ImageCarousel from "./homecomponents/carouselImage/CarouselHomeImage";

const Home = () => {


    return (
        <div className="homePage">

                <Helmet>
                    <title>Centre de formation d'esthétisme - Mélodie des Sens</title>
                    <link rel="canonical" href="https://mdsformations-website-u5520.vm.elestio.app/" />
                    <meta name="description" content="Découvrez notre centre de formation, proposant des formations dans le domaine de l'esthétique, de la beauté, du spa et du massage par Mélodie des Sens." />
                </Helmet>
            <SeoBreadcrumb pageType="home" />
            <HomeHeader />
            <div className="home2">
            <h2>Nous avons forcément une formation <span>faites pour vous !</span></h2>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button >Nos formations</button></Link>
            <Modalite />
            </div>
            <Question />
            <div className="home2">
            <h2 className="h3">Obtenez des <span>certification reconnus</span> : Des formations de qualités à votre portée !</h2>
            <CarousselFormationDesktop filterValues={['certification']} />
            <Link to={"/toutes-nos-formations"}><button className="button_webinaire">Toutes nos formations certifiantes</button> </Link> 
            </div>
            <HomeFinancement />
            
          <div className="carouselImage">
            <div className="titreImage">
              <span className="h3">Découverte de notre <span>galerie d'images</span></span>
            </div>
            <ImageCarousel  />
          </div>
            <HomeTemoin />
            <HomeCadreTestformation />
            <HomePointfort />

            <div className="googlemapdiv">
                <span className="h3">Former-vous <span>là où vous le souhaitez !</span></span>
                <p>Découvrez nos formations disponibles dans plusieurs villes pour répondre à vos besoins.</p>
                <div className="contactGoogleDesktop">
                    <p><strong>33 Blanche Lande 44521, Oudon</strong></p>
                    <p><strong>02 40 96 32 80 |</strong> du lundi au vendredi de 10 heures à 17 heures</p>
                    <p><strong>contact@mdsformations.fr</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Home;
