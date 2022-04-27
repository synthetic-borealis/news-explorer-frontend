import "./Button.css";

function Button({
  type,
  className,
  onClick,
  onMouseEnter,
  onMouseLeave,
  children,
  disabled,
  ariaLabel,
}) {
  const buttonClassName = `Button${className ? ` ${className}` : ""}`;
  const buttonType = type ? type : "button";

  return (
    <button
      type={buttonType}
      className={buttonClassName}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...(ariaLabel ? { "aria-label": `${ariaLabel}` } : {})}
      {...(disabled ? { disabled: true } : {})}
    >
      {children}
    </button>
  );
}

export default Button;
