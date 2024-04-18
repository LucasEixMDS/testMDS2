import PropTypes from "prop-types";
import plus from "../../../../public/plus.svg";
import minus from "../../../../public/minus.svg";
import "./HeaderMobile.scss";
import MobileNavbarMenuItemTags from './MobileNavbarMenuItemTags';

const MobileNavbarMenuButton = ({ menuName, visible = false, isActive = false, hasSubMenus = false, onClick }) => {
    return (
        <button className={visible ? undefined : 'hidden'} style={{ color: hasSubMenus && isActive ? '#7874C7' : undefined }} onClick={onClick}>
            {menuName}
            <MobileNavbarMenuItemTags menuName={menuName} />
            {hasSubMenus && (isActive
                ? <img src={minus} alt="minus" />
                : <img className='svgplus' src={plus} alt="plus" />
            )}
        </button>
    );
}

MobileNavbarMenuButton.propTypes = {
    menuName: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    isActive: PropTypes.bool.isRequired,
    hasSubMenus: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MobileNavbarMenuButton;
