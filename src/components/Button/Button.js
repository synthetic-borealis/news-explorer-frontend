import "./Button.css";

function Button(props) {
  const buttonClassName = `Button${
    props.extraClasses ? ` ${props.extraClasses}` : ""
  }`;
  const buttonType = props.type ? props.type : "button";

  return (
    <button
      type={buttonType}
      className={buttonClassName}
      onClick={(e) => e.preventDefault()}
    >
      {props.children}
    </button>
  );
}

export default Button;
