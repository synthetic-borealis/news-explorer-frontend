import "./NewsCardButton.css";

import bookmarkIcon from "../../images/icons/icon-bookmark.svg";
import filledBookmarkIcon from "../../images/icons/icon-bookmark-filled.svg";
import deleteIcon from "../../images/icons/icon-trash.svg";

import { useLocation } from "react-router";
import { routePaths } from "../../utils/constants";

import Button from "../Button/Button";

function NewsCardButton(props) {
  const location = useLocation();
  const icon =
    location.pathname === routePaths.savedNews
      ? deleteIcon
      : props.isSaved
      ? filledBookmarkIcon
      : bookmarkIcon;

  const iconClasses = `NewsCardButton__icon${
    location.pathname === routePaths.home && props.isSaved
      ? " NewsCardButton__icon_filled"
      : ""
  }`;

  const iconAltString = location.pathname === routePaths.savedNews ? "delete" : "save";

  return (
    <Button
      extraClasses="NewsCardButton"
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <img className={iconClasses} src={icon} alt={iconAltString} />
    </Button>
  );
}

export default NewsCardButton;
