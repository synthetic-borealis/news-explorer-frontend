import "./Header.css";

import React from "react";
import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";

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
    headerClasses = headerClasses.concat(" Header_background_dark");
  }
  if (isBackgroundWhite) {
    headerClasses = headerClasses.concat(" Header_background_white");
  }

  function handleMenuButton() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleWindowResize() {
    setIsMobilePhone(window.innerWidth <= maxMobileWidth);
    if (!isMobilePhone) {
      setIsMenuOpen(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <header className={headerClasses}>
      <Navigation
        isLoggedIn={props.isLoggedIn}
        onLogoutClick={props.onLogoutClick}
        onLoginClick={props.onLoginClick}
        onMenuButtonClick={handleMenuButton}
        isMobilePhone={isMobilePhone}
        isMenuOpen={isMenuOpen}
        isBackgroundWhite={isBackgroundWhite}
      />
    </header>
  );
}

export default Header;
