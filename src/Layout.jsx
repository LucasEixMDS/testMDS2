import Footer from "./components/Layout/Footer";
import HeaderMobile from "./components/Layout/HeaderMobile";
import HeaderDesktop from "./components/Layout/HeaderDesktop"
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="backPage">
      <HeaderMobile />
      <HeaderDesktop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
