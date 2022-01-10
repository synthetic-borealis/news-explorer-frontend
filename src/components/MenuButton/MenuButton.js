import "./MenuButton.css";

function MenuButton(props) {
  let buttonClasses = "MenuButton";
  if (props.isMenuOpen) {
    buttonClasses = buttonClasses.concat(" MenuButton_open");
  }
  if (props.isBackgroundWhite) {
    buttonClasses = buttonClasses.concat(" MenuButton_background_white");
  }
  return (
    <button className={buttonClasses} onClick={props.onClick}></button>
  );
}

export default MenuButton;
