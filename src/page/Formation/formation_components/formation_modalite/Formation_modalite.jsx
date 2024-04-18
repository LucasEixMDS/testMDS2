import './formation_modalite.scss'
import PropTypes from 'prop-types';
import ecole from "../../../../../public/ecole.svg";
import correction from "../../../../../public/correction.svg";
import siege from "../../../../../public/siege.svg";
import avocate from "../../../../../public/avocate.svg";
import { Link } from "react-router-dom";

const Formation_modalite = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (
        <div className='modalite'>
            <span className='h3'><span style={colorStyle}>Modalités</span> de la formation</span >

        <div className="modalite-container">
                <div className="container-left">
                    <div className="modal-top">
                        <div className="modal-top-icon">
                            <img src={ecole} alt="icon apple d'une ecole" />
                        </div>
                        <span className='h4'>Pré-requis</span>
                        <p>Brevet des collèges ou équivalent.</p>
                    </div>
                    <div className="modal-bottom">
                    <div className="modal-bottom-icon">
                            <img src={siege} alt="icon apple d'une personne en siège roulant avec une personne qui roule" />
                        </div>
                        <span className='h4'>Accessibilité</span>
                        <p>Des formations conçues pour accueillir tous les apprenants, quelles que soient leurs capacités.</p>
                        <Link to="/handicap"><button>En savoir +</button></Link>
                    </div>
                </div>
                <div className="container-right">
                <div className="modal-top">
                        <div className="modal-top-icon">
                            <img src={correction} alt="icon apple d'une page et d'un stylo pour une copie écrite" />
                        </div>
                        <span className='h4'>Examens</span>
                        <ul>
                            <li>Épreuve théorique écrite</li>
                            <li>Mise en pratique</li>
                            <li>Dossier professionnel</li>
                        </ul>
                    </div>
                    <div className="modal-bottom">
                    <div className="modal-bottom-icon">
                            <img src={avocate} alt="icon apple d'une femme avocate" />
                        </div>
                        <span className='h4'>VAE & VAP</span>
                        <p>Reconnaissance de vos compétences existantes et obtenez la certification que vous méritez.</p>
                        <Link to="/vae-vap"><button>En savoir +</button></Link>
                    </div> 
                </div>
        </div>

        </div>
    );
};


Formation_modalite.propTypes = {
    formation: PropTypes.object.isRequired
};
export default Formation_modalite;