import React from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ savedArticles }) {
  const sectionClassName = "SavedNewsHeader";
  const containerClassName = "SavedNewsHeader__container";
  const titleClassName = "SavedNewsHeader__title";
  const subtitleClassName = "SavedNewsHeader__subtitle";
  const keywordsLabelClass = "SavedNewsHeader__keywords";
  const keywordsListClass = "SavedNewsHeader__keyword-list";

  const currentUser = React.useContext(CurrentUserContext);
  const userName = currentUser.name.split(" ")[0];
  const numberOfArticles = savedArticles.length | "error";
  let keywordSet = new Set();
  savedArticles.forEach((article) => {
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
      keywordString = `${keywords[0]}, ${keywords[1]}, and ${
        keywords.length - 2
      } other`;
  }

  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <p className={titleClassName}>Saved articles</p>
        <h2 className={subtitleClassName}>
          {userName}, you have {numberOfArticles} saved articles
        </h2>
        <p className={keywordsLabelClass}>
          By keywords:{" "}
          <span className={keywordsListClass}>{keywordString}</span>
        </p>
      </div>
    </section>
  );
}

export default SavedNewsHeader;
