import './Caroussel_plateforme.scss';
import PropTypes from 'prop-types';
import Carousel_plateforme from "./Caroussel_plateforme";



const Components_plateforme = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    
    const backgroundStyle = {
        backgroundColor: formation.colorFormation
    };
    return (
        <div className='plateforme-container'>
            <span className='h2'>Complétez votre expérience de formation avec notre plateforme de cours en ligne gratuite ! </span>
            <button style={backgroundStyle}> En savoir +</button>
            <span className='h3' style={colorStyle}> Notre plateforme vous offre :</span>

            <Carousel_plateforme formation={formation} />
        </div>  
    );
};

Components_plateforme.propTypes = {
    formation: PropTypes.object
};

export default Components_plateforme;