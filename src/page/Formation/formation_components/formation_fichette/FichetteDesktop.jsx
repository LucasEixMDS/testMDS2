import "./FichetteDesktop.scss";
import PropTypes from 'prop-types'; // Importez PropTypes
import { Link } from "react-router-dom";
import horloge from "../../../../../public/lhorloge.svg";
import Lieu from "../../../../../public/lieu4.svg";
import Euro from "../../../../../public/cout.svg";
import diplome from "../../../../../public/diplome.svg";
import accessibilite from "../../../../../public/accessibilite1.svg";
import finance from "../../../../../public/la-finance.svg";
import dormir from "../../../../../public/dormir1.svg";

const Fichette = ({ formation }) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    const colorBack = {
        backgroundColor: formation.colorFormation, 
    };

  return (
    <div className="modalFichette">
        <div className="fichetteContainer">
        
        <div className="containFichette">
        <div className="fichetteContainerLeft">
        <div className="containTextFichette">
                <p style={colorStyle}><img src={horloge} alt="icon d'une horloge" /></p>
                <div className="textFichette">
                    <p>{formation.fichette.time1}<br/>{formation.fichette.time2}</p>
                   
                </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}><img src={finance} alt="icon d'un echange de finance pour le financement" /></p>
                    <div className="textFichette">
                        <p>{formation.fichette.financement}</p>
                        <Link to="/different-financement"><button>En savoir+</button></Link>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}>{formation.fichette.titreVae}</p>
                    <div className="textFichette">
                        <p>{formation.fichette.vae}</p>
                        <Link to="/vae-vap"><button>En savoir+</button></Link>
                    </div>
            </div>
          

        </div>

        <div className="fichetteContainerRight">
        <div className="containTextFichette">
                <p style={colorStyle}><img src={Lieu} alt="icon d'une localisation pour le lieu" /></p>
                <div className="textFichette">
                    <p>{formation.fichette.lieu}</p>
                </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}><img src={Euro} alt="icon pour le prix un euro" /></p>
                <div className="textFichette">
                    <a href="#financementDesktop"><p className="iconCont">{formation.fichette.tarifs}</p></a>
                </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}><img src={diplome} alt="icon d'un diplome pour la certification" /></p>
                    <div className="textFichette">
                        <p className="iconCont">{formation.certification.rncp}</p>
                        <p>{formation.certification.level}</p>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}><img src={accessibilite} alt="icon d'une personne en situation de handicap pour l'accessibilié" /></p>
                    <div className="textFichette">
                        <p>Accessible aux personnes en situations de handicap</p>
                        <Link to="/handicap"><button>En savoir+</button></Link>
                    </div>
            </div>
            <div className="containTextFichette">
                <p style={colorStyle}><img src={dormir} alt="icon d'un hebergement ou personne qui dort pour l'hebergement" /></p>
                    <div className="textFichette">
                        <p>Hebergement sur le lieu de formation</p>
                        <Link to="/hebergement"><button>En savoir+</button></Link>
                    </div>
            </div>
        </div>
        </div>
        
          
           
        <div className="buttonDoc">
        <Link to="/inscription"><button style={colorBack}>Demander la documentation <img src="/flecheFichette.svg" alt="fleche vers le haut" /></button></Link>
        </div>
        </div>
    </div>
  );
};

Fichette.propTypes = {
  formation: PropTypes.object.isRequired, // Ajoutez la validation de type pour formation
};

export default Fichette;
