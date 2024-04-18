import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./HeaderMobile.scss";
import { finalUrls, slugify } from 'utils/routingUtils';
import MobileNavbarMenuItemTags from './MobileNavbarMenuItemTags';

const MobileNavbarMenuLink = ({ menuName, visible = false, onClick }) => {
    return (
        <Link 
            to={finalUrls[menuName] || `/${slugify(menuName)}`} 
            key={menuName}
            className={visible ? undefined : 'hidden'}
            onClick={onClick}
        >
            {menuName}
            <MobileNavbarMenuItemTags menuName={menuName} />
        </Link>
    );
}

MobileNavbarMenuLink.propTypes = {
    menuName: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MobileNavbarMenuLink;
