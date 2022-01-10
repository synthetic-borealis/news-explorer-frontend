import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

import SignoutButton from "../SignoutButton/SignoutButton";
import LoginButton from "../LoginButton/LoginButton";
import MenuButton from "../MenuButton/MenuButton";
import { routePaths } from "../../utils/constants";

function Navigation(props) {
  const location = useLocation();
  const currentUser = React.useContext(CurrentUserContext);
  const userName = props.isLoggedIn ? currentUser.name.split(" ")[0] : "";
  const isBackgroundWhite = location.pathname === routePaths.savedNews;
  const navigationClasses = `Navigation${
    isBackgroundWhite ? " Navigation_background_white" : ""
  }`;

  return (
    <nav className={navigationClasses}>
      <h2 className="Navigation__title">NewsExplorer</h2>
      {props.isMobilePhone ? (
        <MenuButton
          onClick={props.onMenuButtonClick}
          isMenuOpen={false}
          isBackgroundWhite={isBackgroundWhite}
        />
      ) : (
        <ul className="Navigation__container">
          <li className="Navigation__item">
            <NavLink
              exact
              className="Navigation__link Navigation__link_target_home"
              activeClassName="Navigation__link_active"
              to={routePaths.home}
            >
              Home
            </NavLink>
          </li>
          {props.isLoggedIn ? (
            <li className="Navigation__item">
              <NavLink
                exact
                className="Navigation__link Navigation__link_target_saved"
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
              <SignoutButton
                userName={userName}
                ariaLabel="sign out"
                onClick={props.onLogoutClick}
              />
            </li>
          ) : (
            <li className="Navigation__item">
              <LoginButton ariaLabel="sign in" onClick={props.onLoginClick} />
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
