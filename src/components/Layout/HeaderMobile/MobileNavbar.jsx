import { useState } from 'react';
import PropTypes from "prop-types";
import close from "../../../../public/close.svg";
import "./HeaderMobile.scss";
import { menus, subMenus } from 'utils/routingUtils';
import MobileNavbarMenuLink from './MobileNavbarMenuLink';
import MobileNavbarMenuButton from './MobileNavbarMenuButton';

const MobileNavbar = ({ open = false, onClose }) => {
    const [activeMenu, setActiveMenu] = useState(null);
	const [activeSubMenu, setActiveSubMenu] = useState(null);

    const handleClose = () => {
        onClose();
        setActiveMenu(null);
        setActiveSubMenu(null);
    };

    const handleBack = menuName => e => {
        e.preventDefault();

        if (activeMenu === menuName) {
            setActiveMenu(null);
            setActiveSubMenu(null);
        } else if (activeSubMenu === menuName) {
            setActiveSubMenu(null);
        }
     };

     const createHandleMenuClick = menuName => e => {
        e.preventDefault();
        setActiveMenu(menuName);
        setActiveSubMenu(null);
    };

    const createHandleSubMenuClick = (submenuName) => e => {
        e.preventDefault();
        setActiveSubMenu(submenuName);
    }; 

    return (
        <nav className={open ? 'responsive_nav' : undefined}>
            {Object.keys(menus).map((menuName) => {
                const isActiveMenu = activeMenu === menuName;
                return <>
                    <MobileNavbarMenuButton
                        key={menuName}
                        menuName={menuName}
                        visible={(!activeMenu || isActiveMenu) && !activeSubMenu}
                        isActive={isActiveMenu}
                        hasSubMenus={!!menus[menuName]}
                        onClick={isActiveMenu ? handleBack(menuName) : createHandleMenuClick(menuName)}
                    />
                    
                    {menus[menuName].map(subMenu => {
                        const isActiveSubMenu = activeSubMenu === subMenu;
                        const hasSubMenus = !!subMenus[subMenu];
                        return hasSubMenus
                        ?   <>
                                <MobileNavbarMenuButton
                                    key={subMenu}
                                    menuName={subMenu}
                                    visible={(isActiveMenu && !activeSubMenu) || isActiveSubMenu}
                                    isActive={isActiveSubMenu}
                                    hasSubMenus={hasSubMenus}
                                    onClick={isActiveSubMenu ? handleBack(subMenu) : createHandleSubMenuClick(subMenu)}
                                />
                                
                                {subMenus[subMenu].map(sub => (
                                    <MobileNavbarMenuLink
                                        key={sub}
                                        menuName={sub}
                                        visible={isActiveSubMenu}
                                        onClick={handleClose}
                                    />
                                ))}
                            </>
                        :   <MobileNavbarMenuLink
                                key={subMenu}
                                menuName={subMenu}
                                visible={isActiveMenu}
                                onClick={handleClose}
                            />
                    })}
                </>;
            })}

            <button className="nav-btn nav-close-btn" onClick={handleClose}>
                <img src={close} alt="icon pour fermer" />
            </button>
        </nav>
    );
}

MobileNavbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MobileNavbar;
