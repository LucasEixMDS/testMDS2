import './homePointfort.scss'
import coche from '../../../../public/coche.svg';
import { Link } from 'react-router-dom';


const HomePointfort = () => {
    return (
        <div className='homepointfort'>
                        <div className="homepointfort_titre">
                            <h2 className='h3'>Découvrez <span>nos points forts</span> et choisissez <span>l'excellence </span>pour votre formation !</h2>
                            <div className="homepointfort_container_modal">
                                <div className="pointfort_modal">
                                    <p><img src="/pouce.svg" alt="icon apple d'un pouce en l'air" /></p>
                                </div>
                            </div> 
                        </div>
            <div className="homepointfort_liste">
                    <ul>
                <li>
                <div className="list-contentDesktop">
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div className='text'>
                            <span>Expertise pédagogique : </span>
                            formateurs expérimentés et passionnés
                        </div>
                    </div>
                    <div className="textDesktop">
                    L'expertise pédagogique de MDS Formations repose sur une équipe de formateurs expérimentés et véritablement passionnés par leur domaine. Ils partagent leur savoir avec enthousiasme, ce qui se traduit par une expérience d'apprentissage enrichissante pour nos élèves.
                    </div>
                    </div>
                </li>
                <li>
                <div className="list-contentDesktop">
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div className='text'>
                            <span>Contenus pertinents : </span>
                            formation constamment actualisées
                        </div>
                    </div>
                    <div className="textDesktop">
                    Chez MDS Formations, nous nous engageons à maintenir nos contenus pédagogiques au top niveau. Nos formations sont constamment actualisées pour refléter les dernières tendances, techniques et pratiques.
                    </div>
                    </div>
                </li>
                <li>
                <div className="list-contentDesktop">
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div className='text'>
                            <span>Flexibilité et adaptabilité : </span>
                            formations en ligne et plateforme de cours accessibles 24h/24 et 7j/7
                        </div>
                    </div>
                    <div className="textDesktop">
                    Nous comprenons que la vie est souvent bien remplie, c'est pourquoi nous offrons des formations en ligne. Notre plateforme de cours est accessible 24h/24, 7j/7, ce qui signifie que vous pouvez apprendre à votre propre rythme, en fonction de votre emploi du temps et de vos préférences.
                    </div>
                </div>    
                </li>
                <li>
                <div className="list-contentDesktop">
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div className='text'>
                            <span>Accompagnement personnalisé : </span>
                            suivi individualisé pour maximiser votre apprentissage
                        </div>
                    </div>
                    <div className="textDesktop">
                    Lorsque vous choisissez MDS Formations, vous bénéficiez d'un accompagnement personnalisé pour maximiser votre apprentissage. Notre équipe pédagogique est là pour répondre à vos questions, vous soutenir et vous guider tout au long de votre parcours de formation.
                    </div>
                    </div>
                </li>
                <li>
                <div className="list-contentDesktop">
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div className='text'>
                            <span>Reconnaissance : </span>
                            formations reconnues et certifications qualifiantes
                        </div>
                    </div>
                    <div className="textDesktop">
                    Toutes nos formations sont reconnues par l'État et par les professionnels. Nos certifications et titres professionnels attestent de votre expertise et de vos compétences, ouvrant la voie à de nouvelles opportunités professionnelles.
                    </div>
                    </div>
                </li>
                <li>
                    <div className="list-contentDesktop">
                    <div className="list-content">
                        <img src={coche} alt="rond avec un signe valider" />
                        <div className='text'>
                            <span>Communauté dynamique : </span>
                            connectez-vous avec des professionnels partageant les mêmes intérêts
                        </div>
                    </div>
                    <div className="textDesktop">
                        Chez MDS Formations, vous n'êtes pas seul. Notre communauté dynamique vous permet de vous connecter avec d'autres professionnels partageant les mêmes intérêts. Partagez vos expériences, collaborez et continuez à apprendre ensemble. Rejoignez une communauté engagée dans l'excellence de la formation professionnelle.
                    </div>
                    </div>
                </li>
            </ul>

            </div>
                    <div className="homepointfort_button">
                        <Link to="/inscription"><button>En savoir +</button></Link>
                    </div>
        </div>
    );
};

export default HomePointfort;
