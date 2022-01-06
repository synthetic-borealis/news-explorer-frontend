import React from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

import SignoutButton from "../SignoutButton/SignoutButton";
import LoginButton from "../LoginButton/LoginButton";
import { routePaths } from "../../utils/constants";

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const userName = props.isLoggedIn ? currentUser.name.split(" ")[0] : "";

  return (
    <nav className="Navigation">
      <h2 className="Navigation__title">NewsExplorer</h2>
      <ul className="Navigation__container">
        <li className="Navigation__item">
          <NavLink
            className="Navigation__link"
            activeClassName="Navigation__link_active"
            to={routePaths.home}
          >
            Home
          </NavLink>
        </li>
        {props.isLoggedIn ? (
          <li className="Navigation__item">
            <NavLink
              className="Navigation__link"
              activeClassName="Navigation__link_active"
              to={routePaths.savedNews}
            >
              Saved articles
            </NavLink>
          </li>
        ) : (
          ""
        )}
        {props.isLoggedIn ? (
          <li className="Navigation__item">
            <SignoutButton userName={userName} ariaLabel="sign out" onClick={props.onLogoutClick} />
          </li>
        ) : (
          <li className="Navigation__item Navigation__item_margin_narrow">
            <LoginButton ariaLabel="sign in" onClick={props.onLoginClick} />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
