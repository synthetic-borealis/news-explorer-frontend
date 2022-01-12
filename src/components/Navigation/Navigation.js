import React from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

import SignoutButton from "../SignoutButton/SignoutButton";
import LoginButton from "../LoginButton/LoginButton";
import MenuButton from "../MenuButton/MenuButton";
import { routePaths } from "../../utils/constants";

function Navigation({
  onMenuButtonClick,
  isLoggedIn,
  isBackgroundWhite,
  isMobilePhone,
  isMenuOpen,
  onLoginClick,
  onLogoutClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const userName = isLoggedIn ? currentUser.name.split(" ")[0] : "";
  const navigationClasses = `Navigation${
    isBackgroundWhite ? " Navigation_background_white" : ""
  }`;
  const titleClassName = "Navigation__title";
  const containerClassName = "Navigation__container";
  const itemClassName = "Navigation__item";
  const linkClassName = "Navigation__link";
  const activeLinkClass = "Navigation__link_active";
  const homeLinkClass = "Navigation__link_target_home";
  const savedLinkClass = "Navigation__link_target_saved";

  return (
    <nav className={navigationClasses}>
      <h2 className={titleClassName}>NewsExplorer</h2>
      {isMobilePhone ? (
        <MenuButton
          onClick={onMenuButtonClick}
          isMenuOpen={isMenuOpen}
          isBackgroundWhite={isBackgroundWhite}
        />
      ) : (
        <ul className={containerClassName}>
          <li className={itemClassName}>
            <NavLink
              exact
              className={`${linkClassName} ${homeLinkClass}`}
              activeClassName={activeLinkClass}
              to={routePaths.home}
            >
              Home
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li className={itemClassName}>
              <NavLink
                exact
                className={`${linkClassName} ${savedLinkClass}`}
                activeClassName={activeLinkClass}
                to={routePaths.savedNews}
              >
                Saved articles
              </NavLink>
            </li>
          ) : (
            ""
          )}
          {isLoggedIn ? (
            <li className={itemClassName}>
              <SignoutButton
                userName={userName}
                ariaLabel="sign out"
                onClick={onLogoutClick}
              />
            </li>
          ) : (
            <li className={itemClassName}>
              <LoginButton ariaLabel="sign in" onClick={onLoginClick} />
            </li>
          )}
        </ul>
      )}
    </nav>
  );
}

export default Navigation;
