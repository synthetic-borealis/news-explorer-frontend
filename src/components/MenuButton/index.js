import "./MenuButton.css";

function MenuButton({ isMenuOpen, onClick, isBackgroundWhite }) {
  let buttonClasses = "MenuButton";

  if (isMenuOpen) {
    buttonClasses = buttonClasses.concat(" MenuButton_open");
  }

  if (isBackgroundWhite) {
    buttonClasses = buttonClasses.concat(" MenuButton_background_white");
  }

  return <button className={buttonClasses} onClick={onClick}></button>;
}

export default MenuButton;
