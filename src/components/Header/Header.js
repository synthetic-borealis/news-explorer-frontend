import "./Header.css";

import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";

import { routePaths } from "../../utils/constants";

function Header(props) {
  const location = useLocation();
  const headerClasses = `Header${location.pathname === routePaths.savedNews ? " Header_background_white" : ""}`;

  return (
    <header className={headerClasses}>
      <Navigation isLoggedIn={props.isLoggedIn} onLogoutClick={props.onLogoutClick} onLoginClick={props.onLoginClick} />
    </header>
  );
}

export default Header;
