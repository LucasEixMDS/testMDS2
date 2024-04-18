import PropTypes from 'prop-types';
import "./formationPlateforme.scss"
import { Link } from "react-router-dom";


const formationPlateforme = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };

    const backgroundStyle = {
        backgroundColor: formation.colorFormation, 
    };
  
    return (
        <div className='formationPlateformeDesktop'>
            <span className='h3'><strong>Complétez votre expérience de formation avec notre <span style={colorStyle}>plateforme de cours en ligne gratuite !</span></strong></span>
            <span className='h4' style={colorStyle}>Notre plateforme vous offre :</span>
            <div className="plateformeList">
        <ul>
            {formation.plateformeDesktop.map((item, index) => (
                <li key={index}>
                    <div className="containerPlateforme">
                        <svg width="20" height="21" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                            <g id="Group">
                                <path id="Vector" d="M9.96094 20.5164C15.4102 20.5164 19.9219 16.0107 19.9219 10.5902C19.9219 5.16003 15.4004 0.664062 9.95117 0.664062C4.51172 0.664062 0 5.16003 0 10.5902C0 16.0107 4.52148 20.5164 9.96094 20.5164Z" fill={formation.colorFormation} />
                                <path id="Vector_2" d="M8.86719 15.3489C8.53516 15.3489 8.26172 15.2127 8.00781 14.8721L5.55664 11.8748C5.41016 11.6802 5.32227 11.466 5.32227 11.2422C5.32227 10.8043 5.66406 10.4442 6.10352 10.4442C6.38672 10.4442 6.60156 10.5318 6.8457 10.853L8.82812 13.4026L12.998 6.7268C13.1836 6.43486 13.4375 6.27916 13.6914 6.27916C14.1211 6.27916 14.5215 6.5711 14.5215 7.02848C14.5215 7.24257 14.3945 7.4664 14.2773 7.67076L9.6875 14.8721C9.48242 15.1933 9.19922 15.3489 8.86719 15.3489Z" fill="white"/>
                            </g>
                        </svg>
                        <p>{item}</p>
                    </div>
                </li>
            ))}
        </ul>
        </div>
        <div className="plateformeButton">
            <Link to="/formations-distanciel"><button style={backgroundStyle}>En savoir +</button></Link>
        </div>
    </div>
    );
};

formationPlateforme.propTypes = {
    formation: PropTypes.object.isRequired,
};

export default formationPlateforme;