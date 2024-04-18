import { Outlet } from "react-router-dom";
import HeaderMobile from "./HeaderMobile";
import Footer from "./Footer/Footer";
import HeaderDesktop from "./HeaderDesktop";

const Layout = () => {
    return (
        <div>
            <HeaderMobile />
            <HeaderDesktop />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
