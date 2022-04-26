import Button from "../Button";

import { useLocation } from "react-router";
import { routePaths } from "../../utils/constants";

import "./SignoutButton.css";
import logoutIcon from "../../images/icons/icon-logout.svg";

function SignoutButton(props) {
  const location = useLocation();
  const buttonClasses = `SignoutButton${location.pathname === routePaths.savedNews ? " SignoutButton_background_white" : ""}`;

  return (
    <Button className={buttonClasses} onClick={props.onClick}>
      <p className="SignoutButton__label">{props.userName}</p>
      <img src={logoutIcon} className="SignoutButton__icon" alt="signout" />
    </Button>
  );
}

export default SignoutButton;
