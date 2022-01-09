import "./TagBubble.css";

function TagBubble(props) {
  const tagBubbleClasses = `TagBubble${props.extraClasses ? ` ${props.extraClasses}` : ""}`;
  return (<div className={tagBubbleClasses}>
    <p className="TagBubble__caption">
      {props.caption}
    </p>
  </div>)
}

export default TagBubble;
