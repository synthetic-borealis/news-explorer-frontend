import "./ShowMoreButton.css";

import Button from "../Button/Button";

function ShowMoreButton(props) {
  return (
  <Button extraClasses="ShowMoreButton" ariaLabel="show more" onClick={props.onClick}>Show more</Button>
  );
}

export default ShowMoreButton;
