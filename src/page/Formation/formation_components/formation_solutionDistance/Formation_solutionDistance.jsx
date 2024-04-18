import "./Formation_solutionDistance.scss";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Formation_solutionDistance = ({formation}) => {


    const colorStyle = {
        color: formation.colorFormation, 
    };



    return (
        <div className="solutionDistance">
            <span className="h3">Formez-vous aussi <span style={colorStyle}>dans le monde entier</span></span>
            <p>Formez-vous sans quitter votre domicile avec notre solution 100 % en ligne.</p>

            <div className="container-distance">
                <div className="container-distance-right">
                    <p><img src="/internet.svg" alt="icon de internet en globe tréssé" />Liberté d'Apprentissage : Formez-vous selon votre emploi du temps.</p>
                    <p><img src="/pc.svg" alt="icon d'un ordinateur portable" />Connexion Virtuelle : Apprenez en ligne, en restant connecté.</p>
                    <p><img src="/loupe.svg" alt="icon d'une loupe" />Ressources de Qualité : Accédez à un contenu enrichissant.</p>
                    <Link to="/formations-distanciel"><button style={ {backgroundColor: formation.colorFormation}}>En savoir +</button></Link>
                </div>
            </div>
        </div>
    );
};

Formation_solutionDistance.propTypes = {
    formation: PropTypes.object.isRequired,
  };

export default Formation_solutionDistance;
