import "./Header.css";

import React from "react";
import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import { routePaths } from "../../utils/constants";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isBackgroundWhite = location.pathname === routePaths.savedNews;
  const maxMobileWidth = 680;
  const [isMobilePhone, setIsMobilePhone] = React.useState(
    window.innerWidth <= maxMobileWidth
  );
  let headerClasses = "Header";
  if (isMenuOpen) {
    headerClasses = headerClasses.concat(
      " Header_with-menu Header_background_dark"
    );
  }
  if (isBackgroundWhite) {
    headerClasses = headerClasses.concat(" Header_background_white");
  }

  const menuUnderlayClasses = `Header__menu-underlay${
    isMenuOpen ? " Header__menu-underlay_active" : ""
  }`;

  function handleMenuButton() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleWindowResize() {
    setIsMobilePhone(window.innerWidth <= maxMobileWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    if (!isMobilePhone) {
      setIsMenuOpen(false);
    }
  }, [isMobilePhone]);

  return (
    <header className={headerClasses}>
      {isMenuOpen ? <div className={menuUnderlayClasses} /> : ""}
      <Navigation
        isLoggedIn={props.isLoggedIn}
        onLogoutClick={props.onLogoutClick}
        onLoginClick={props.onLoginClick}
        onMenuButtonClick={handleMenuButton}
        isMobilePhone={isMobilePhone}
        isMenuOpen={isMenuOpen}
        isBackgroundWhite={isBackgroundWhite}
      />
      {isMobilePhone ? <MobileMenu isOpen={isMenuOpen} /> : ""}
    </header>
  );
}

export default Header;
