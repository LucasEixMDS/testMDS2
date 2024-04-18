import PropTypes from 'prop-types';
import './HeaderDesktop.scss';
import { useRef } from 'react';
import SubMenu from './SubMenu';

const MenuItem = ({ title, onOpen, onClose, openedSubmenu = false }) => {
  const ref = useRef(null);
  return (
    <>
      <button ref={ref} className="menu-item" onClick={onOpen}>
        {title}
      </button>
      <SubMenu open={openedSubmenu} anchorRef={ref} title={title} onClose={onClose} />
    </>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  openedSubmenu: PropTypes.bool,
};

export default MenuItem;
