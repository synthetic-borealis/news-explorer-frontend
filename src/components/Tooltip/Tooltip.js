import "./Tooltip.css";

function Tooltip(props) {
  const tooltipClasses = `Tooltip${props.extraClasses ? ` ${props.extraClasses}` : ""}`;
  return (<div className={tooltipClasses}>
    <p className="Tooltip__caption">
      {props.caption}
    </p>
  </div>)
}

export default Tooltip;
