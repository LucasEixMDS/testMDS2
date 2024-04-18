import './HeaderDesktop.scss'
import Logo from '../../../../public/logoMDS.svg'; 
import Menu from './Menu'; 
import { Link } from 'react-router-dom';



const HeaderDesktop = () => {
  return (
    <header className='HeaderDesktop'>
      <div className='content'>
        <div className='brand'>
          <Link to="/">
            <img src={Logo} alt="Logo du centre de formation" />
          </Link>
        </div>
        <Menu />
      </div>
  
      <div className="ticker-wrapper">
        <Link to="/porte-ouverte">
          <div className="containTicker">
          <div className="ticker">
            <p>Journée </p>
            <p>Portes ouvertes </p>
          </div>
          <div className="ticker2">
            <p>Samedi 15 Juin 10h00 à 13h00</p>
            <p className='adresse'>33 Blanche Lande 44521 Oudon</p>
          </div>
          </div>
          <p className='clique'>Cliquez pour vous inscrire</p>
        </Link>
      </div>
    </header>
  );
};

export default HeaderDesktop;
<div className="ticker">
            <p>Portes ouvertes le <strong>15 Juin 2024</strong> de 10h à 13h, <strong>cliquez-ici</strong> pour reserver un créneau !</p>
          </div>