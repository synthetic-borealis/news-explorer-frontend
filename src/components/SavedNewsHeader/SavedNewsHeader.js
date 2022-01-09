import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNewsHeader.css";

function SavedNewsHeader(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const userName = currentUser.name.split(" ")[0];
  const numberOfArticles = props.savedArticles.length | "error";
  let keywordSet = new Set();
  props.savedArticles.forEach((article) => {
    keywordSet.add(article.keyword);
  });
  const keywords = Array.from(keywordSet);

  let keywordString = "";
  switch (keywords.length) {
    case 0:
      keywordString = "none";
      break;

    case 1:
      keywordString = keywords[0];
      break;

    case 2:
      keywordString = `${keywords[0]}, and ${keywords[1]}`;
      break;

    default:
      keywordString = `${keywords[0]}, ${keywords[1]}, and ${keywords.length - 2} other`;
  }

  return (<section className="SavedNewsHeader">
    <div className="SavedNewsHeader__container">
      <p className="SavedNewsHeader__title">Saved articles</p>
      <h2 className="SavedNewsHeader__subtitle">{userName}, you have {numberOfArticles} saved articles</h2>
      <p className="SavedNewsHeader__keywords">
        By keywords: <span className="SavedNewsHeader__keyword-list">{keywordString}</span>
      </p>
    </div>
  </section>);
}

export default SavedNewsHeader;
