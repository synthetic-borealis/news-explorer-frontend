import "./Tooltip.css";

function Tooltip({ className, caption }) {
  const tooltipClasses = `Tooltip${className ? ` ${className}` : ""}`;
  const captionClassName = "Tooltip__caption";

  return (
    <div className={tooltipClasses}>
      <p className={captionClassName}>{caption}</p>
    </div>
  );
}

export default Tooltip;
