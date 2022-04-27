import "./TagBubble.css";

function TagBubble({ className, caption }) {
  const tagBubbleClasses = `TagBubble${className ? ` ${className}` : ""}`;

  return (
    <div className={tagBubbleClasses}>
      <p className="TagBubble__caption">{caption}</p>
    </div>
  );
}

export default TagBubble;
