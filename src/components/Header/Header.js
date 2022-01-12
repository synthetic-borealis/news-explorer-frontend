import "./Header.css";

import React from "react";
import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";
import MobileMenu from "../MobileMenu/MobileMenu";

import { routePaths } from "../../utils/constants";

function Header({ isLoggedIn, onLoginClick, onLogoutClick, isMobilePhone }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const isBackgroundWhite = location.pathname === routePaths.savedNews;
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

  React.useEffect(() => {
    if (!isMobilePhone) {
      setIsMenuOpen(false);
    }
  }, [isMobilePhone]);

  return (
    <header className={headerClasses}>
      {isMenuOpen ? <div className={menuUnderlayClasses} /> : ""}
      <Navigation
        isLoggedIn={isLoggedIn}
        onLogoutClick={onLogoutClick}
        onLoginClick={onLoginClick}
        onMenuButtonClick={handleMenuButton}
        isMobilePhone={isMobilePhone}
        isMenuOpen={isMenuOpen}
        isBackgroundWhite={isBackgroundWhite}
      />
      {isMobilePhone ? (
        <MobileMenu
          isOpen={isMenuOpen}
          isLoggedIn={isLoggedIn}
          isBackgroundWhite={isBackgroundWhite}
          onLoginClick={onLoginClick}
          onLogoutClick={onLogoutClick}
        />
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
