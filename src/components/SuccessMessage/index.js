import "./SuccessMessage.css";

function SuccessMessage({title, linkCaption, onClickLink, ...props}) {
  return (
    <div className="SuccessMessage">
      <h2 className="SuccessMessage__title">{title}</h2>
      <button className="SuccessMessage__link" onClick={onClickLink}>{linkCaption}</button>
    </div>
  );
}

export default SuccessMessage;
