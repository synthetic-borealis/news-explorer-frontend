import "./Header.css";

import { useLocation } from "react-router";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const location = useLocation();

  return (
    <header className="Header">
      <Navigation isLoggedIn={props.isLoggedIn} onLogoutClick={props.onLogoutClick} onLoginClick={props.onLoginClick} />
    </header>
  );
}

export default Header;
