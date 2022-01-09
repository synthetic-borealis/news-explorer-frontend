import "./NewsCardButton.css";

import bookmarkIcon from "../../images/icons/icon-bookmark.svg";
import deleteIcon from "../../images/icons/icon-trash.svg";

import { useLocation } from "react-router";
import { routePaths } from "../../utils/constants";

import Button from "../Button/Button";

function NewsCardButton(props) {
  const location = useLocation();

  switch (location.pathname) {
    case routePaths.home:
      return (
        <Button
          extraClasses="NewsCardButton"
          onClick={props.onClick}
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        >
          <img className="NewsCardButton__icon" src={bookmarkIcon} />
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
