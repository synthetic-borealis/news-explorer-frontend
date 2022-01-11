import "./CloseButton.css";

function CloseButton({ onClick, extraClasses, ...props }) {
  const buttonClasses = `CloseButton${extraClasses ? ` ${extraClasses}` : ""}`;

  return <button className={buttonClasses} onClick={onClick} />;
}

export default CloseButton;
