import "./formation_financement.scss";
import PropTypes from 'prop-types';
import Caroussel_financement from "../formation_financement/Caroussel_financement"



const Formation_financement = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
    };
    return (
        <div className="financement">
                <div className="financement_tarifs">
                        <span className="h3"><strong>Des tarifs <span className="text-color" style={colorStyle}>clairs et transparents</span></strong></span>
                    <div className="financement_complet">
                        <p className="text-color" style={colorStyle}>{formation.pricing.completForm}</p>
                        <p>formation complète</p>
                    </div>
                </div>
                <Caroussel_financement formation={formation} />
            <div className="financement_prix">
                <div className="financement_prix_top">
                    <div className="financement_dossier">
                        <p>Frais de dossier</p>
                        <p className="text-color" style={colorStyle}>{formation.pricing.registrationFee}</p>
                    </div>
                    <div className="financement_examen">
                        <p>Frais d'examen</p>
                        <p className="text-color" style={colorStyle}>{formation.pricing.examFee}</p>
                    </div>
                </div>
                <div className="financement_prix_mid">
                    <div className="financement_paiement">
                        <p>Facilité de paiement en plusieurs fois</p>
                        <p className="text-color" style={colorStyle}>{formation.pricing.paymentOption}</p>
                    </div>
                </div>
                <div className="financement_prix_bottom">
                    <div className="financement_bloc">
                    {formation.pricing.block1 && (
                        <div className="financement_cpf">
                            <p>Formation au bloc 1</p>
                            <p className="text-color" style={colorStyle}>{formation.pricing.block1}</p>
                        </div>
                    )}
                    {formation.pricing.personalBlock1 && (
                        <div className="financement_perso">
                            <p>Financement personnel</p>
                            <p className="text-color" style={colorStyle}>{formation.pricing.personalBlock1}</p>
                        </div>
                    )}
                    </div>
                    <div className="financement_bloc">
                    {formation.pricing.block2 && (
                        <div className="financement_cpf">
                            <p>Formation au bloc 2</p>
                            <p className="text-color" style={colorStyle}>{formation.pricing.block2}</p>
                        </div>
                    )}
                    {formation.pricing.personalBlock2 && (
                        <div className="financement_perso">
                            <p>Financement personnel</p>
                            <p className="text-color" style={colorStyle}>{formation.pricing.personalBlock2}</p>
                        </div>
                    )}
                    </div>
                    <div className="financement_bloc">
                    {formation.pricing.block3 && (
                        <div className="financement_cpf">
                            <p>Formation au bloc 3</p>
                            <p className="text-color" style={colorStyle}>{formation.pricing.block3}</p>
                        </div>
                    )}
                    {formation.pricing.personalBlock3 && (
                        <div className="financement_perso">
                            <p>Financement personnel</p>
                            <p className="text-color" style={colorStyle}>{formation.pricing.personalBlock3}</p>
                        </div>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Formation_financement.propTypes = {
    formation: PropTypes.object.isRequired
};

export default Formation_financement;