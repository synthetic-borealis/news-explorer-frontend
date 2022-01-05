import { NavLink } from "react-router-dom";
import "./Navigation.css";

import Button from "../Button/Button";
import { routePaths } from "../../utils/constants";

function Navigation(props) {
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
          {/* <NavButton>Elise</NavButton> */}
          <Button extraClasses="Navigation__button">Elise B.</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
