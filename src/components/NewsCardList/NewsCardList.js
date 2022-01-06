import "./NewsCardList.css";

function NewsCardList(props) {
  return (<ul className="NewsCardList">{props.children}</ul>);
}

export default NewsCardList;
