import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../../public/logoMDS.svg";
import menu from "../../../../public/menu.svg";
import mobile from "../../../../public/mobile.svg";
import loupe from "../../../../public/loupe.svg";
import "./HeaderMobile.scss";
import MobileBanner from './MobileBanner';
import MobileNavbar from './MobileNavbar';

const HeaderMobile = () => {
    const [open, setOpen] = useState(null);

    const handleOpen = () => setOpen(true);

    const handleClose = () => setOpen(false);

    return (
        <header className='headerMobile'>
            <Link to="/" >
                <span>
                    <img src={logo} alt="logo du centre de formation" />
                </span>
            </Link>
            <div className="rightMenu">
                <img src={mobile} alt="icon d'un téléphone portable" />
                <img src={loupe} alt="icon d'une loupe" />
                
                <MobileNavbar open={open} onClose={handleClose} />

                <button className="nav-btn" onClick={handleOpen}>
                    <img src={menu} alt="icon d'un menu" />
                </button>
            </div>

            <MobileBanner />
        </header>
    );
}

export default HeaderMobile;
