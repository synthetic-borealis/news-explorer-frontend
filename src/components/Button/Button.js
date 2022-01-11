import "./Button.css";

function Button({type, extraClasses, onClick, onMouseEnter, onMouseLeave, children, disabled, ...props}) {
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
      {...(props.ariaLabel ? { "aria-label": `${props.ariaLabel}` } : {})}
      {...(disabled ? {disabled: true} : {})}
    >
      {children}
    </button>
  );
}

export default Button;
