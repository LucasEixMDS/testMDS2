import PropTypes from "prop-types";
import "./HeaderMobile.scss";

const MobileNavbarMenuItemTag = ({ tag }) => (
    <button key={tag} className='tagButton'>{tag}</button>
);

MobileNavbarMenuItemTag.propTypes = {
    tag: PropTypes.object.isRequired,
};

export default MobileNavbarMenuItemTag;
