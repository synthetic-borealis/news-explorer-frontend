import "./ShowMoreButton.css";

import Button from "../Button";

function ShowMoreButton({ onClick }) {
  const buttonClassName = "ShowMoreButton";

  return (
    <Button className={buttonClassName} ariaLabel="show more" onClick={onClick}>
      Show more
    </Button>
  );
}

export default ShowMoreButton;
