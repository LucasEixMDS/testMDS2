
import "./HomeStyle/homeHeader.scss";
import { Link } from 'react-router-dom';


const HomeHeader = () => {


    return ( 
        <div >
            <div className="container" decoding="async">
                <div className="container_titre" >
                    
                    <h1 className="titre-home-desktop"><span>Mélodie des sens - Centre de formation</span></h1>
                    <h2>Formez-vous au métier du bien-être et de la beauté</h2>
                </div>
                <div className="container_modal">
                <div className="container_modal_left">
                    <div className="container_modal_left_top">
                            <div className="reflect">
                                <p><img src="/reflechir.svg" alt="icon apple d'une personne qui reflechis" /></p>
                            </div> 
                        </div>
                            <div className="container_modal_left_mid">
                                <span className="h2">Trouver votre formation </span>
                            </div>
                        <div className="button">
                            <Link to="/toutes-nos-formations">
                            <button>En savoir +</button>
                            </Link>
                        </div>
                    </div>
                    <div className="container_modal_right">
                        <div className="container_modal_right_top">
                            <div className="fete">
                                <p><img src="/fete.svg" alt="icon apple d'une personne qui fait la fete" /></p>
                            </div>
                        </div>
                        <div className="container_modal_right_mid">
                            <span className="h2">Je prend mon avenir en mains !</span>
                        </div>
                        <div className="button">
                            <Link to="/inscription">
                            <button>S'inscrire</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
