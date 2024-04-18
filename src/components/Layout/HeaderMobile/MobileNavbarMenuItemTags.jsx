import PropTypes from "prop-types";
import "./HeaderMobile.scss";
import { submenuTags } from 'utils/routingUtils';
import MobileNavbarMenuItemTag from './MobileNavbarMenuItemTag';

const MobileNavbarMenuItemTags = ({ menuName }) => {
    const tags = submenuTags[menuName] || [];
    return tags.map(tag => (
        <MobileNavbarMenuItemTag key={tag} tag={tag} />
    ));
}

MobileNavbarMenuItemTags.propTypes = {
    menuName: PropTypes.string.isRequired,
};

export default MobileNavbarMenuItemTags;
