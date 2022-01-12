import "./SuccessMessage.css";

function SuccessMessage({title, linkCaption, onClickLink, ...props}) {
  const containerClassName = "SuccessMessage";
  const titleClassName = "SuccessMessage__title";
  const linkClassName = "SuccessMessage__link";

  return (
    <div className={containerClassName}>
      <h2 className={titleClassName}>{title}</h2>
      <button className={linkClassName} onClick={onClickLink}>{linkCaption}</button>
    </div>
  );
}

export default SuccessMessage;
