import Button from "../Button/Button";

import "./SignoutButton.css";
import logoutIcon from "../../images/icons/icon-logout.svg";

function SignoutButton(props) {
  return (
    <Button extraClasses="SignoutButton">
      <p className="SignoutButton__label">{props.userName}</p>
      <img src={logoutIcon} className="SignoutButton__icon" />
    </Button>
  );
}

export default SignoutButton;
