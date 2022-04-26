import "./TagBubble.css";

function TagBubble({ className, caption }) {
  const tagBubbleClasses = `TagBubble${className ? ` ${className}` : ""}`;
  const captionClassName = "TagBubble__caption";

  return (
    <div className={tagBubbleClasses}>
      <p className={captionClassName}>{caption}</p>
    </div>
  );
}

export default TagBubble;
