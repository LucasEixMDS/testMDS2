import { useState } from 'react';
import MenuItem from './MenuItem';
import PhoneIcon from '../../../../public/mobile.svg'; 
import mailIcon from '../../../../public/mailIcon.svg'; 
import './HeaderDesktop.scss';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [openedSubmenu, setOpenedSubmenu] = useState();

  const createHandleOpen = title => () => setOpenedSubmenu(title);

  const handleClose = () => setOpenedSubmenu();

  return (
    <nav>
      <MenuItem
        title="Nos formations"
        onOpen={createHandleOpen('Nos formations')}
        onClose={handleClose}
        openedSubmenu={openedSubmenu === "Nos formations"}
      />
      <MenuItem
        title="Orientation"
        onOpen={createHandleOpen('Orientation')}
        onClose={handleClose}
        openedSubmenu={openedSubmenu === "Orientation"}
      />
      <MenuItem
        title="Accompagnement"
        onOpen={createHandleOpen('Accompagnement')}
        onClose={handleClose}
        openedSubmenu={openedSubmenu === "Accompagnement"}
      />
      <MenuItem
        title="Chez MDS"
        onOpen={createHandleOpen('Chez MDS')}
        onClose={handleClose}
        openedSubmenu={openedSubmenu === "Chez MDS"}
      />
      
      <div className="contact">
        <div className='phone'>
          <Link to="/inscription">
            <img src={PhoneIcon} alt="Icône téléphone" />
          </Link>
        </div>
        <div className='mail'>
          <a className='mailling' href='mailto:camille.melodiedessens@gmail.com' target='blank' rel='noreferrer'>
            <img src={mailIcon} alt="Logo du centre de formation" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
