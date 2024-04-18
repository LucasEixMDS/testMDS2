import "./formation_financementDesktop.scss";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Formation_financementDesktop = ({formation}) => {

    const colorStyle = {
        color: formation.colorFormation, 
        
    };

    const backgroundStyle = {
        backgroundColor:formation.colorFormation,
    };

    return (
        <div className="financementDesktop">
            <div className="financementDesktopLeft">
                <div className="financementTitleDesktop">
                    <span className="h2" >Des tarifs <span style={colorStyle}>clairs et transparent</span></span >
                </div>
                <div className="financementTarifsDesktop">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <span className="h2" >Financement Personnel</span >
                                    <span className='date'>{formation.pricing.financementPerso}</span>
                                </div>
                            </div>
                    </div>
                    <div className="financementTarifsDesktop2">
                        <span  style={colorStyle}>{formation.pricing.completForm}</span >
                        <p>Formation complète avec prise en charge</p>
                    </div>
                </div>
                <div className="financementModalBottom">
                <Link to="/inscription">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <span className="h2" >Financement Pôle emploi à partir de 0 €</span >
                                </div>
                            </div>
                            <div className="financementButton">
                                <button style={backgroundStyle}>En savoir +</button>
                            </div>
                    </div>
                    </Link>
                    <Link to="/inscription">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <span className="h2" >Alternance prise en charge à <span>100%</span></span >
                                </div>
                            </div>
                            <div className="financementButton">
                               <button style={backgroundStyle}>En savoir +</button>
                            </div>
                    </div>
                    </Link>
                    <Link to="/inscription">
                    <div className="financementItems">
                            <div className="financementTopContainer">
                                <div className="financementIcon">
                                    <span className="h2" >Financement CPF jusqu'à <span>100%</span></span >
                                </div>
                            </div>
                            <div className="financementButton">
                               <button style={backgroundStyle}>S'inscrire</button>
                            </div>
                    </div>
                    </Link>
                </div>
            </div>



            <div className="financementDesktopRight">
                <div className="fichetteTarifs">
                    <div className="financeItem">
                        <div className="fraisDossier">
                            <p>Frais de dossier</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.registrationFee}</p>
                        </div>
                        <div className="financeItem2">
                            <p>Frais d'examen</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.examFee}</p>
                        </div>
                    </div>
                    <div className="financeItem3">
                        <p>Facilité de paiement en plusieurs fois,</p>
                        <p className="prix" style={colorStyle}>{formation.pricing.paymentOption}</p>
                    </div>
                    <div className="financeItem">
                    {formation.pricing.block1 && (
                            <div className="block">
                                <p>Formation au bloc 1</p>
                                <p className="prix" style={colorStyle}>{formation.pricing.block1}</p>
                            </div>
                        )}
                         {formation.pricing.personalBlock1 && (
                        <div className="financePerso">
                            <p>Financement personnel</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.personalBlock1}</p>
                        </div>
                         )}
                    </div>
                    <div className="financeItem">
                    {formation.pricing.block2 && (
                        <div className="block">
                            <p>Formation au bloc 2</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.block2}</p>
                        </div>
                    )}
                     {formation.pricing.personalBlock2 && (
                        <div className="financePerso">
                            <p>Financement personnel</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.personalBlock2}</p>
                        </div>
                     )}
                    </div>
                    <div className="financeItem">
                    {formation.pricing.block3 && (
                        <div className="block">
                            <p>Formation au bloc 3</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.block3}</p>
                        </div>
                    )}
                     {formation.pricing.personalBlock3 && (
                        <div className="financePerso">
                            <p>Financement personnel</p>
                            <p className="prix" style={colorStyle}>{formation.pricing.personalBlock3}</p>
                        </div>
                     )}
                    </div>
                </div>
            </div>
        </div>
    );
};

Formation_financementDesktop.propTypes = {
    formation: PropTypes.object.isRequired
};


export default Formation_financementDesktop;