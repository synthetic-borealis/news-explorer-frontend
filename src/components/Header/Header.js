import "./Header.css";

import React from "react";
import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";

import { routePaths } from "../../utils/constants";

function Header(props) {
  const maxMobileWidth = 680;
  const [isMobilePhone, setIsMobilePhone] = React.useState(
    window.innerWidth <= maxMobileWidth
  );
  const location = useLocation();
  const headerClasses = `Header${
    location.pathname === routePaths.savedNews ? " Header_background_white" : ""
  }`;

  function handleMenuButton() {
    console.log("toggling menu");
  }

  function handleWindowResize() {
    setIsMobilePhone(window.innerWidth <= maxMobileWidth);
    if (isMobilePhone) {
      console.log("mobile phone resolution");
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
      />
    </header>
  );
}

export default Header;
