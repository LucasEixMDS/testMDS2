import Caroussel_formation from "../../../../components/carrousels/CarrouselFormation/CarrouselFormation";
import "./caroussel_pageFormation.scss";
import PropTypes from 'prop-types';

const Caroussel_PageFormation = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (

        <div className="pageFormation">
            <span className="h4">Explorez nos <span style={colorStyle}>formations complémentaires</span> pour un apprentissage approfondi !</span>
        <div className="home">
             <Caroussel_formation />
        </div>
        </div>
    );
};

Caroussel_PageFormation.propTypes = {
    formation: PropTypes.object.isRequired   
};

export default Caroussel_PageFormation;