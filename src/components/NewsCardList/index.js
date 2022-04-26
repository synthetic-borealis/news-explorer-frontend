import "./NewsCardList.css";

function NewsCardList({ children }) {
  const listClassName = "NewsCardList";

  return <ul className={listClassName}>{children}</ul>;
}

export default NewsCardList;
