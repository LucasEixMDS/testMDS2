import { getMenuData } from './menuData'; 
import PropTypes from "prop-types";
import './SubMenu.scss';
import { useEffect, useState } from 'react';
import { finalUrls } from 'utils/routingUtils';
import { useNavigate } from 'react-router-dom'; // Importer useNavigate

const SubMenu = ({ open, title, anchorRef, onClose }) => {
  const menuData = getMenuData(title);
  const navigate = useNavigate(); // Initialiser useNavigate
  const [openedSubCategory, setOpenedSubCategory] = useState(null);

  useEffect(() => {
    setOpenedSubCategory(null);
  }, [title]);

  if (!menuData || !menuData.items) {
    return null;
  }

  const left = anchorRef.current ? (anchorRef.current.offsetLeft - 260 - 80) : 0;
  
  const handleNavigation = (path) => { // Fonction pour gérer la navigation
    navigate(path);
    onClose(); // Fermer le menu après navigation
  };

  return (
    <div className={open ? "sub-menu" : "hidden sub-menu"} style={{ left }} onMouseLeave={onClose}>
      <div className="sub-menu-content">
        <div className="sub-menu-image">
          <img src={menuData.imageUrl} alt={title} />
        </div>
        <div className="sub-menu-items">
          <div className="sub-menu-item selected">
            {title}
          </div>
          {menuData.items.map(item => {
            const selected = openedSubCategory?.label === item.label;
            return (
              <div key={item.label} className={"sub-menu-item button" + (selected ? ' selected' : '')} onClick={() => setOpenedSubCategory(item)}>
                {item.label}
                {selected ? ' -' : ' +'}
              </div>
            )
          })}
        </div>
        <div className='divider' />
        {menuData.items.map(item => (
          <div key={item.label} className={openedSubCategory === item ? 'sub-menu-details' : 'sub-menu-details hidden'}>
            {item.details.map(detail => (
              <button key={detail} className="sub-menu-item button" onClick={() => handleNavigation(finalUrls[detail])}>
                {detail}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

SubMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  anchorRef: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SubMenu;