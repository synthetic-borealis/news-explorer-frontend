import "./Header.css";

import Navigation from "../Navigation/Navigation";

function Header(props) {
  return (
    <header className="Header">
      <Navigation isLoggedIn={props.isLoggedIn} onLogout={props.onLogout} onLogin={props.onLogin} />
    </header>
  );
}

export default Header;
