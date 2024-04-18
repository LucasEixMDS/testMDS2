import './HomeTemoin.scss';
import star from '../../../../public/star.svg';
import stars from '../../../../public/stars.svg';
// import lolita from '../../../../public/lolita.png';
import avis1 from '../../../../public/googleAvis1.svg';
import avis2 from '../../../../public/googleAvis2.svg'
import { Link } from 'react-router-dom';

const HomeTemoin = () => {
    return (
        <div className='home_temoin_container'>
         <span className='h3'>Nos apprenants <span>témoignent</span> : leurs réussite parle d'elle-même</span>

                <div className="home_temoin_desktop">
                    <div className="modal-temoin">
                        <div className="modalText">
                            <img src={avis2} alt="icon d'une etoile jaune pour les avis google" />
                            <p>La formation longue en réflexologie m'ouvre le "champ des possibles". Les divers formateurs, Laure, Elise, Mélodie (Duane, Benjamin..) sont passionnés, accessibles et disponibles. Je les remercie pour leur écoute et leur patience.</p>
                        </div>
                        <div className="temoin_modal_stars">
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={star} alt="étoile avis google pas entière, de moitié" />
                        </div>
                        <p className='text-modal'>il y a un mois</p>
                    </div> 
                    <div className="modal-temoin">
                    <div className="modalText">
                            <img src={avis1} alt="icon d'une etoile jaune pour les avis google" />
                            <p>La formation longue en réflexologie m'ouvre le "champ des possibles". Les divers formateurs, Laure, Elise, Mélodie (Duane, Benjamin..) sont passionnés, accessibles et disponibles. Je les remercie pour leur écoute et leur patience.</p>
                        </div>
                        <div className="temoin_modal_stars">
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={stars} alt="étoile avis google" />
                                <img src={star} alt="étoile avis google pas entière, de moitié" />
                        </div>
                        <p className='text-modal'>il y a un mois</p>
                    </div>
                </div>
         <div className="home_temoin">
         <div className="home_temoin_hide">
                
                </div>
            <div className="home_temoin_left">
                <div className="home_temoin_modal_google">
                    <p>4,9<span>/5</span></p>
                    <div className="temoin_modal_stars">
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={stars} alt="étoile avis google" />
                    <img src={star} alt="étoile avis google pas entière, de moitié" />
                    </div>
                    <p className='google_text'>sur 192 avis google</p>
                </div>
                <div className="home_temoin_modal_button">
                    <Link to="https://g.page/r/CTsMowlEAEWLEAI/review"><button>Voir tous les avis</button></Link>
                </div>
            </div>
            {/* <div className="home_temoin_right">
                <div className="home_temoin_modal_article" style={{ backgroundImage: `url(${lolita})` }}>
                    
                        <div className="home_temoin_modal_mid">
                            <span className='h3'>Témoignage de lolita, masseuse</span>
                            <span className='h4'>« J’ai enfin découvert ma voie... »</span>
                           
                            
                        </div>
                        <Link to="/"><button>Lire l'article</button></Link>
                    
                </div>
                <div className="home_temoin_right_button">

                </div>
            </div> */}
           
         </div>
        </div>
    );
};

export default HomeTemoin;