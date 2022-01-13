import "./MobileMenu.css";

import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import SignoutButton from "../SignoutButton/SignoutButton";

import { routePaths } from "../../utils/constants";

function MobileMenu({
  isOpen,
  isLoggedIn,
  isBackgroundWhite,
  onLoginClick,
  onLogoutClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const userName = isLoggedIn ? currentUser.name.split(" ")[0] : "";
  let menuClasses = `MobileMenu`;
  if (isOpen) {
    menuClasses = menuClasses.concat(" MobileMenu__open");
  }
  if (isBackgroundWhite) {
    menuClasses = menuClasses.concat(" MobileMenu_background_white");
  }

  const containerClass = "MobileMenu__container";
  const menuItemClass = "MobileMenu__item";
  const linkClass = "MobileMenu__link";

  return (
    <section className={menuClasses}>
      <ul className={containerClass}>
        <li className={menuItemClass}>
          <Link className={linkClass} to={routePaths.home}>
            Home
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className={menuItemClass}>
              <Link className={linkClass} to={routePaths.savedNews}>
                Saved articles
              </Link>
            </li>
            <li className={menuItemClass}>
              <SignoutButton
                userName={userName}
                ariaLabel="sign out"
                onClick={onLogoutClick}
              />
            </li>
          </>
        ) : (
          <li className={menuItemClass}>
            <LoginButton ariaLabel="sign in" onClick={onLoginClick} />
          </li>
        )}
      </ul>
    </section>
  );
}

export default MobileMenu;
