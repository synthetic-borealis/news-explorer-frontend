import "./MobileMenu.css";

function MobileMenu(props) {
  const menuClasses = `MobileMenu${props.isOpen ? ` MobileMenu__open` : ""}`;
  return (<section className={menuClasses}>
    <ul className="MobileMenu__container"></ul>
  </section>);
}

export default MobileMenu;
