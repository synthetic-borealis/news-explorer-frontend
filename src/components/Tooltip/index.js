import "./Tooltip.css";

function Tooltip({ className, caption }) {
  const tooltipClasses = `Tooltip${className ? ` ${className}` : ""}`;

  return (
    <div className={tooltipClasses}>
      <p className="Tooltip__caption">{caption}</p>
    </div>
  );
}

export default Tooltip;
