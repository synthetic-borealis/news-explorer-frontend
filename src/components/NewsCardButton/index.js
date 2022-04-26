import "./NewsCardButton.css";

import bookmarkIcon from "../../images/icons/icon-bookmark.svg";
import filledBookmarkIcon from "../../images/icons/icon-bookmark-filled.svg";
import deleteIcon from "../../images/icons/icon-trash.svg";

import { useLocation } from "react-router";
import { routePaths } from "../../utils/constants";

import Button from "../Button";

function NewsCardButton({ onClick, onMouseEnter, onMouseLeave, isSaved }) {
  const location = useLocation();
  const icon =
    location.pathname === routePaths.savedNews
      ? deleteIcon
      : isSaved
      ? filledBookmarkIcon
      : bookmarkIcon;

  const buttonClassName = "NewsCardButton";
  const iconClasses = `NewsCardButton__icon${
    location.pathname === routePaths.home && isSaved
      ? " NewsCardButton__icon_filled"
      : ""
  }`;

  const iconAltString =
    location.pathname === routePaths.savedNews ? "delete" : "save";

  return (
    <Button
      className={buttonClassName}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img className={iconClasses} src={icon} alt={iconAltString} />
    </Button>
  );
}

export default NewsCardButton;
