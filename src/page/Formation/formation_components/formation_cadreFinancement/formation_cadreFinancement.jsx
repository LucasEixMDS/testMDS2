import './formation_cadreFinancement.scss';
import { Link } from 'react-router-dom';

const formation_cadreFinancement = () => {
    return (
        <div className="financement_cadre" >
            <div className="financement_cadreModalContainer">
            <div className="financement_cadre_modal">
                <div className="icon">
                <p><img src="/reflechir.svg" alt="icon apple d'une personne qui réflechis" /></p>
                </div>
            </div>
            <span className='h3'>Besoin d’aide pour comprendre les financements ?</span>
            </div>
            <div className="financement_cadre_button">
            <Link to="/inscription"><button>nous contacter</button></Link>
            <Link to="/different-financement"><button className='buttonSavoir'>En savoir +</button></Link>
            </div>
        </div>
    );
};

export default formation_cadreFinancement;
