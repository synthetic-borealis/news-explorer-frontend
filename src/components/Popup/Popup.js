import "./Popup.css";

import CloseButton from "../CloseButton/CloseButton";

function Popup({ isVisible, onClose, children }) {
  const popupClassName = `Popup${isVisible ? " Popup_visible" : ""}`;
  const overlayClass = "Popup__overlay";
  const modalClass = "Popup__modal";
  const closeButtonClass = "Popup__close-button";

  function handleEscapePress(evt) {
    if (evt.key === "Escape") {
      onClose();
    }
  }

  return (
    <section
      className={popupClassName}
      onKeyDown={handleEscapePress}
      tabIndex="0"
    >
      <div className={overlayClass} onClick={onClose} />
      <div className={modalClass}>
        {children}
        <CloseButton onClick={onClose} extraClasses={closeButtonClass} />
      </div>
    </section>
  );
}

export default Popup;
