import "./MobileMenu.css";

import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import { Link } from "react-router-dom";
import LoginButton from "../LoginButton";
import SignoutButton from "../SignoutButton";

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

  return (
    <section className={menuClasses}>
      <ul className="MobileMenu__container">
        <li className="MobileMenu__item">
          <Link className="MobileMenu__link" to={routePaths.home}>
            Home
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li className="MobileMenu__item">
              <Link className="MobileMenu__link" to={routePaths.savedNews}>
                Saved articles
              </Link>
            </li>
            <li className="MobileMenu__item">
              <SignoutButton
                userName={userName}
                ariaLabel="sign out"
                onClick={onLogoutClick}
              />
            </li>
          </>
        ) : (
          <li className="MobileMenu__item">
            <LoginButton ariaLabel="sign in" onClick={onLoginClick} />
          </li>
        )}
      </ul>
    </section>
  );
}

export default MobileMenu;
