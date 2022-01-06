import "./ShowMoreButton.css";

import Button from "../Button/Button";

function ShowMoreButton(props) {
  return (
  <Button extraClasses="ShowMoreButton" onClick={props.onClick}>Show more</Button>
  );
}

export default ShowMoreButton;
