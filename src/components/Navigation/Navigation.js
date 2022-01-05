import React from "react";
import { NavLink } from "react-router-dom";
import CurrentUserContext from "../../contexts/CurrentUserContext";

import "./Navigation.css";

import Button from "../Button/Button";
import SignoutButton from "../SignoutButton/SignoutButton";
import { routePaths } from "../../utils/constants";

function Navigation(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const userName = currentUser ? currentUser.name.split(" ")[0] : '';
  const buttonClasses = `Navigation__button`;

  return (
    <nav className="Navigation">
      <h2 className="Navigation__title">NewsExplorer</h2>
      <ul className="Navigation__container">
        <li className="Navigation__item">
          <NavLink className="Navigation__link" activeClassName="Navigation__link_active" to={routePaths.home}>Home</NavLink>
        </li>
        <li className="Navigation__item">
          <NavLink className="Navigation__link" activeClassName="Navigation__link_active" to={routePaths.savedNews}>Saved articles</NavLink>
        </li>
        <li className="Navigation__item">
          {currentUser ? <SignoutButton userName={userName}/> : ''}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
