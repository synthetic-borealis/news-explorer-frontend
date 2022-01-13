import "./CloseButton.css";

function CloseButton({ onClick, extraClasses, }) {
  const buttonClasses = `CloseButton${extraClasses ? ` ${extraClasses}` : ""}`;

  return <button className={buttonClasses} onClick={onClick} />;
}

export default CloseButton;
