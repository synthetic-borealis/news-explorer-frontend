import "./Button.css";

function Button({type, extraClasses, onClick, onMouseEnter, onMouseLeave, children, disabled, ariaLabel, ...props}) {
  const buttonClassName = `Button${
    extraClasses ? ` ${extraClasses}` : ""
  }`;
  const buttonType = type ? type : "button";

  return (
    <button
      type={buttonType}
      className={buttonClassName}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...(ariaLabel ? { "aria-label": `${ariaLabel}` } : {})}
      {...(disabled ? {disabled: true} : {})}
    >
      {children}
    </button>
  );
}

export default Button;
