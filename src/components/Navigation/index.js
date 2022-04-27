import React from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

import SignoutButton from "../SignoutButton";
import LoginButton from "../LoginButton";
import MenuButton from "../MenuButton";
import { routePaths } from "../../utils/constants";

function Navigation({
  onMenuButtonClick,
  isBackgroundWhite,
  isMobilePhone,
  isMenuOpen,
  onLoginClick,
  onLogoutClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isLoggedIn = typeof currentUser === "object";
  const userName = isLoggedIn ? currentUser.name.split(" ")[0] : "";
  const navigationClasses = `Navigation${
    isBackgroundWhite ? " Navigation_background_white" : ""
  }`;
  const getHomeLinkClass = ({isActive}) => {
    return `Navigation__link Navigation__link_target_home ${isActive ? " Navigation__link_active" : ""}`;
  };
  const getSavedLinkClass = ({isActive}) => {
    return `Navigation__link Navigation__link_target_saved ${isActive ? " Navigation__link_active" : ""}`;
  };

  return (
    <nav className={navigationClasses}>
      <h2 className="Navigation__title">NewsExplorer</h2>
      {isMobilePhone ? (
        <MenuButton
          onClick={onMenuButtonClick}
          isMenuOpen={isMenuOpen}
          isBackgroundWhite={isBackgroundWhite}
        />
      ) : (
        <ul className="Navigation__container">
          <li className="Navigation__item">
            <NavLink
              className={getHomeLinkClass}
              to={routePaths.home}
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li className="Navigation__item">
              <NavLink
                className={getSavedLinkClass}
                to={routePaths.savedNews}
              >
                Saved articles
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <li className="Navigation__item">
              <SignoutButton
                userName={userName}
                ariaLabel="sign out"
                onClick={onLogoutClick}
              />
            </li>
          ) : (
            <li className="Navigation__item">
              <LoginButton ariaLabel="sign in" onClick={onLoginClick} />
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
