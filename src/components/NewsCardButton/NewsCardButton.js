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

  switch (location.pathname) {
    case routePaths.home:
      return (
        <Button
          extraClasses="NewsCardButton"
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          <img className={iconClasses} src={icon} />
        </Button>
      );
      break;

    case routePaths.savedNews:
      return (
        <Button
          extraClasses="NewsCardButton"
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          <img className="NewsCardButton__icon" src={deleteIcon} />
        </Button>
      );
      break;

    default:
      return <></>;
  }
}

export default NewsCardButton;
