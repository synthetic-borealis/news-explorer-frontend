import "./SavedNews.css";

import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import SavedNewsMain from "../SavedNewsMain/SavedNewsMain";

function SavedNews(props) {
  return (
    <main className="SavedNews">
      <SavedNewsHeader savedArticles={props.savedArticles} />
      <SavedNewsMain savedArticles={props.savedArticles} onCardButtonClick={props.onCardButtonClick} />
    </main>
  );
}

export default SavedNews;
