import { Link } from 'react-router-dom';
import "./HeaderMobile.scss";

const MobileBanner = () => (
    <div className="ticker-wrapper">
        <Link to="/porte-ouverte">
            <div className="ticker">
                <p>Portes ouvertes le <strong>15 Juin 2024</strong><strong> : cliquez-ici</strong></p>
            </div>
        </Link>
    </div>
);

export default MobileBanner;
