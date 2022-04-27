import "./ShowMoreButton.css";

import Button from "../Button";

function ShowMoreButton({ onClick }) {
  return (
    <Button className="ShowMoreButton" ariaLabel="show more" onClick={onClick}>
      Show more
    </Button>
  );
}

export default ShowMoreButton;
